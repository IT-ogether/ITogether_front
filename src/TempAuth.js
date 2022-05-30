import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';

const Auth = () => {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_KEY;

  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_code: REDIRECT_URI,
      code: code
    });
    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );

      window.Kakao.Auth.setAccessToken(res.data.access_token);
      localStorage.setItem('isLogin', true);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log('HI');
    getToken();
  }, []);

  return <div></div>;
};

export default Auth;
