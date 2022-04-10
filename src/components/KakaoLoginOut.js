import Button from '@mui/material/Button';
import { useState } from 'react';

const KakaoLoginOut = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [btnText, setBtnText] = useState(
    localStorage.getItem('isLogin') === null ? 'LOGIN' : 'LOGOUT'
  );
  const longinOnClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const logoutOnClick = async () => {
    localStorage.removeItem('isLogin');
    setBtnText((btnText) => 'LOGIN');
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={() =>
          localStorage.getItem('isLogin') === null
            ? longinOnClick()
            : logoutOnClick()
        }
      >
        {btnText}
      </Button>
    </div>
  );
};

export default KakaoLoginOut;
