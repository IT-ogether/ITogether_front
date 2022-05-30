import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { request } from '../config/axios';
const DUMMYDATA = {
  name: '민석',
  category: '프론트엔드',
  recommends: [
    {
      informationId: 1,
      title: '넥스터즈',
      url: 'http://teamnexters.com/',
      category: 'club'
    },
    {
      informationId: 2,
      title: 'SOPT',
      url: 'http://sopt.org/wp/',
      category: 'club'
    }
  ]
};

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
        setRecommendation(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRecommendation();
  }, []);

  return (
    <div
      style={{
        position: 'sticky',
        border: '1px solid gray',
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
      {recommendation.map((recommend) => (
        <div
          style={{
            border: '1px solid gray',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
          onClick={() =>
            navigate(
              `/detailinfo/${recommend.category}/${recommend.informationId}`
            )
          }
        >
          {recommend.title}
        </div>
      ))}
    </div>
  );
};
export default Recommend;
