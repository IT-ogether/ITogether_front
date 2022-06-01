import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import 'swiper/scss'; //basic
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { request } from '../config/axios';

const Recommend = () => {
  const navigate = useNavigate();
  const [recommendation, setRecommendation] = useState([]);
  const preference = useSelector((state) => state.preference);
  const nickName = useSelector((state) => state.nickName);
  
  const getRecommendation = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        token: localStorage.getItem('accessToken')
      }
    };

    await fetch(process.env.REACT_APP_URL + '/recommendation', requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setRecommendation(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecommendation();
  }, []);

  SwiperCore.use([Pagination, Autoplay]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 2rem',
        fontFamily: 'jua',
        borderRadius: '5px'
      }}
    >
      <div
        style={{
          fontSize: 30
        }}
      >
        {nickName}님을 위한
        <br />
        {preference} 활동들
      </div>
      <Swiper
        autoplay={{
          delay: 3000
        }}
        style={{ width: '70vw', height: '20vh' }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoHeight={true}
      >
        {recommendation.map((recommend) => (
          <SwiperSlide
            style={{
              width: '80vw',
              height: '15vh',
              cursor: 'pointer',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            key={recommend.informationId}
          >
            <div
              style={{
                width: '80vw',
                height: '10vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() =>
                navigate(
                  `/detailinfo/${recommend.categoryName}/${recommend.informationId}`
                )
              }
            >
              <img
                src={recommend.logo}
                style={{ maxWidth: '30vw', maxHeight: '10vh' }}
                alt="logo"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Recommend;
