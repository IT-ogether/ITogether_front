import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';

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
      localStorage.setItem('JWT_TOKEN', response.data.jwtAccessToken);
    } catch (error) {
      console.log(error);
    }
  }

  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    navigate('/');
    postCode(code);
  }, []);

  return <div></div>;
};

export default Auth;
