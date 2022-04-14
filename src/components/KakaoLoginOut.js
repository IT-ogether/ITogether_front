import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginDispatchContext } from '../App';

const KakaoLoginOut = ({ login }) => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const navigate = useNavigate();

  const { r_logout, r_login } = useContext(LoginDispatchContext);

  const longinOnClick = () => {
    window.location.href = KAKAO_AUTH_URL;
    navigate('/maininfo');
  };

  useEffect(() => {
    console.log('login');
    console.log(login);
  });

  return (
    <div>
      {login ? (
        <Button onClick={() => r_logout(login)}>LOGOUT</Button>
      ) : (
        <Button
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          LOGIN/SIGNIN
        </Button>
      )}
    </div>
  );
};

export default KakaoLoginOut;
