import { useEffect, useState } from 'react';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';
import axios from 'axios';
import qs from 'qs';
import { request } from '../components/config/axios';
import Preferences from '../components/Preferences';

const Profile = () => {
  const [nickName, setNickName] = useState();
  const [email, setEmail] = useState();
  const [profileImg, setProfileImg] = useState();
  const [bookMarks, setBookMarks] = useState();
  console.log(bookMarks);
  async function getProfile() {
    const accessToken = localStorage.getItem('accessToken');

    await request
      .get(process.env.REACT_APP_URL + '/profile/', {
        headers: {
          token: accessToken
        }
      })
      .then((response) => {
        // console.log(response);
        setNickName((nickName) => response.data.nickName);
        setEmail((nickName) => response.data.email);
        setProfileImg((profileImage) => response.data.profileImage);
        setBookMarks((bookMakrs) => response.data.bookMark);
        localStorage.setItem('nickname', response.data.nickName);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <AppLayout>
      <div className="Profile">
        <div className="Profile__Img__Div">
          <img className="Profile__Img" src={profileImg} alt="profile_img" />
          <div className="Profile__Name">
            <h1>{nickName}</h1>
            <h1>{email}</h1>
          </div>
        </div>
        <div className="Profile__Preferences">
          <Preferences />
        </div>
        <div className="Profile__BookMarks">
          <div
            style={{
              fontSize: '4vmin',
              fontWeight: 'bold',
              marginBottom: '10px'
            }}
          >
            북마크 목록
          </div>
          {bookMarks &&
            bookMarks.map((item) => (
              <div
                className="Profile__BookMarks"
                key={item.informationId}
                style={{ fontSize: '2vmin', marginBottom: '5px' }}
              >
                {item.title}
              </div>
            ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
