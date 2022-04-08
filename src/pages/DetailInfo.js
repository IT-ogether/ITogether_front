import AppLayout from '../components/AppLayout';
import HashTag from '../components/HashTag';
import ToolTip from '../components/ToolTip';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SpeechBubbleLeft from '../components/SpeechBubble/SpeechBubbleLeft';
import SpeechBubbleRight from '../components/SpeechBubble/SpeechBubbleRight';
import Review from '../components/Review';
import { Box, Button, Container } from '@mui/material';
import { request } from '../components/config/axios';

const DetailInfo = () => {
  const { information_id, category } = useParams();
  const [reviews, setReviews] = useState([]);

  //TODO : 서버에서 수정해주시면 바뀌어야하는 부분
  const [data, setData] = useState({});

  useEffect(() => {
    const getDetailInfo = async () => {
      await request
        .get(`/detail-info/${category}/${information_id}`)
        .then((res) => {
          return res.data;
        })
        .then((result) => {
          setReviews(result.reviews);
          setData(result[`detail-info`][0]);
        });
    };
    getDetailInfo();
  }, []);

  // const data = {
  //   information_id: 11,
  //   information_title: 'SOPT',
  //   site_url: 'http://sopt.org/wp/',
  //   logo: 'http://sopt.org/wp/wp-content/uploads/2014/01/30_sopt_logo-1.png',
  //   recruitment_period: '3월, 9월',
  //   activity_period: '4개월',
  //   qualifications: ['수도권 내 대학생'],
  //   fields: ['프론트엔드', '백엔드', 'ios', '안드로이드', '디자이너'],
  //   details: '디테일s'
  // };

  //TODO: 카테고리별 id를 주면 그에 해당하는 데이터 받아옴

  return (
    <AppLayout>
      <div className="DetailInfo">
        <div className="DetailInfo__header">
          <div>
            <img className="DetailInfo__header__img" src={data.logo} />
          </div>
          <div className="DetailInfo__header__title">{data.title}</div>
        </div>

        <Button
          onClick={() => {
            window.open(`${data.url}`, '_blank');
          }}
        >
          사이트 바로가기
        </Button>
        <ToolTip
          titleText={`모집기간 | ${data.recruitment_period}`}
          hideText={'모집기간'}
        />

        {data.qualification && (
          <ToolTip
            titleText={`지원자격 | ${data.qualification}`}
            hideText={'지원자격'}
          />
        )}

        {data.fields && <HashTag fields={data.fields} />}

        <hr />
        {reviews &&
          reviews.map((review, idx) => (
            <Review
              key={idx}
              title={review.title}
              site={review.site}
              url={review.url}
            />
          ))}

        <div className="DetailInfo__SpeechBubble">
          <SpeechBubbleLeft text={'모집일자는 변경될 수 있습니다 '} />
          <SpeechBubbleRight
            text={`모집이 시작되었을 때 알림이 받고 싶다면
             ITogether 채널을 추가해주세요!`}
          />
        </div>
      </div>
    </AppLayout>
  );
};
export default DetailInfo;
