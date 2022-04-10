import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import { LocalPostOfficeRounded } from '@mui/icons-material';

const Auth = () => {
  async function postCode(prop) {
    const authCode = qs.stringify({
      code: prop
    });
    try {
      const response = await axios.post(
        process.env.REACT_APP_URL + '/oauth/kakao/login',
        authCode
      );
      localStorage.setItem('nickName', response.data.nickName);
      localStorage.setItem('email', response.data.email);
      console.log(response.data.email + response.data.nickName);
    } catch (error) {
      console.log(error);
    }
  }

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_KEY;
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    navigate('/');

    postCode(code);
  }, []);

  return <div></div>;
};

export default Auth;
