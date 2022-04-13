import { useEffect, useState } from 'react';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';
import axios from 'axios';
import qs from 'qs';

const Profile = () => {
  const [nickName, setNickName] = useState();
  const [email, setEmail] = useState();
  const [profileImg, setProfileImg] = useState();

  async function getProfile() {
    const accessToken = localStorage.getItem('JWT_TOKEN');
    try {
      const response = await axios.get(
        process.env.REACT_APP_URL + '/profile/',
        {
          headers: {
            token: accessToken
          }
        }
      );
      console.log(response.data);
      setNickName((nickName) => response.data.nickName);
      setEmail((email) => response.data.email);
      setProfileImg((profileImg) => response.data.profileImage);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <AppLayout>
      <div className="Profile">
        <img src={profileImg} width="300px"></img>
        <h1>{nickName}</h1>
        <h1>{email}</h1>
      </div>
    </AppLayout>
  );
};

export default Profile;
