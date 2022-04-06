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
    console.log(authCode);
    try {
      const response = await axios.post(
        'https://adb9-211-202-56-254.ngrok.io/oauth/kakao/login',
        authCode
      );
      console.log(
        response.data.email + response.data.memberId + response.data.nickname
      );
    } catch (error) {
      console.log(error);
    }
  }

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_KEY;
  const navigate = useNavigate();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log(code);
    localStorage.setItem('isLogin', 'true');
    navigate('/');

    postCode(code);
  }, []);

  return <div></div>;
};

export default Auth;
