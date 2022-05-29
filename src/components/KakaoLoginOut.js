import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const KakaoLoginOut = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const dispatch = useDispatch();
  const [isLogged, setIsLogged] = useState(false);
  const logoutClick = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshTokenIndex');
    localStorage.removeItem('isLogged');
    setIsLogged((state) => false);
  };
  useEffect(() => {
    if (localStorage.getItem('isLogged') != null)
      setIsLogged((isLogged) => true);
  });

  return (
    <div>
      <Button
        onClick={() => {
          isLogged === false
            ? (window.location.href = KAKAO_AUTH_URL)
            : logoutClick();
        }}
      >
        {isLogged === true ? 'LOGOUT' : 'LOGIN'}
      </Button>
    </div>
  );
};

export default KakaoLoginOut;
