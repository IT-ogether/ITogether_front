import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss'; //basic
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Recommend = () => {
  const navigate = useNavigate();
  const [recommendation, setRecommendation] = useState([]);

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
        {localStorage.getItem('nickname')}님을 위한
        <br />
        {localStorage.getItem('preference')} 활동들
      </div>
      <Swiper
        autoplay={{
          delay: 500
        }}
        style={{ width: '50vw', height: '10vh' }}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {recommendation.map((recommend) => (
          <SwiperSlide
            style={{
              width: '50vw',
              height: '10vh',
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
                width: '40vw',
                height: '8vh',
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
                width="100em"
                height="100em"
                src={recommend.logo}
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
