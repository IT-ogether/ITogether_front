import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const KakaoLoginOut = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [btnText, setBtnText] = useState(
    localStorage.getItem('nickName') === null ? 'LOGIN' : 'LOGOUT'
  );
  const longinOnClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const logoutOnClick = async () => {
    setBtnText((btnText) => 'LOGIN');
  };

  return (
    <div>
      <Link to="/profile">
        <AssignmentIndIcon
          style={{
            fontSize: '40px'
          }}
        />
      </Link>
      <Button
        variant="outlined"
        onClick={() =>
          localStorage.getItem('nickName') === null
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
