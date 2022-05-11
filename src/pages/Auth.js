import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../App';
import { LoginDispatchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions';
import axios from 'axios';

const Auth = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_KEY;
  const code = new URL(window.location.href).searchParams.get('code');

  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  async function postCode() {
    try {
      await axios
        .post(process.env.REACT_APP_URL + '/oauth/kakao/login?code=' + code)
        .then((res) => {
          localStorage.setItem('accessToken', res.headers['jwtaccesstoken']);
          localStorage.setItem(
            'refreshTokenIndex',
            res.headers['refreshtokenindex']
          );
        })
        .then(() => {
          dispatch(login());
          console.log(isLogged);
          navigate('/');
        });
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    postCode();
  }, []);

  return <div></div>;
};

export default Auth;
