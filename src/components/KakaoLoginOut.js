import Button from '@mui/material/Button';
import { useState } from 'react';
import UserProfile from './UserProfile';

const KakaoLoginOut = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [btnText, setBtnText] = useState(
    localStorage.getItem('JWT_TOKEN') === null ? 'LOGIN' : 'LOGOUT'
  );

  const [visible, setVisible] = useState(
    localStorage.getItem('JWT_TOKEN') === null ? false : true
  );

  const longinOnClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const logoutOnClick = async () => {
    localStorage.removeItem('JWT_TOKEN');
    setBtnText((btnText) => 'LOGIN');
    setVisible((visible) => false);
  };

  return (
    <div className="Login_Profile">
      {visible === true ? <UserProfile /> : null}
      <Button
        variant="outlined"
        onClick={() =>
          localStorage.getItem('JWT_TOKEN') === null
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
