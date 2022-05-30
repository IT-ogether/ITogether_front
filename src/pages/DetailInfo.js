import AppLayout from '../components/AppLayout';
import HashTag from '../components/HashTag';
import ToolTip from '../components/ToolTip';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SpeechBubbleLeft from '../components/SpeechBubble/SpeechBubbleLeft';
import SpeechBubbleRight from '../components/SpeechBubble/SpeechBubbleRight';
import Review from '../components/Review';
import { Button } from '@mui/material';
import { request } from '../components/config/axios';

const DetailInfo = () => {
  const { informationId, category } = useParams();
  const [reviews, setReviews] = useState([]);

  //TODO : 서버에서 수정해주시면 바뀌어야하는 부분
  const [data, setData] = useState({});

  useEffect(() => {
    const getDetailInfo = async () => {
      await request
        .get(`/detail-info/${category}/${informationId}`)
        .then((res) => {
          return res.data;
        })
        .then((result) => {
          // console.log(result);
          setReviews(result.reviews);
          setData(result.detailInfo);
        });
    };
    getDetailInfo();
  }, []);

  return (
    <AppLayout>
      <div className="DetailInfo">
        <div className="DetailInfo__header">
          <div>
            <img
              className="DetailInfo__header__img"
              alt="logoImg"
              src={data.logo}
            />
          </div>
          <div className="DetailInfo__header__title">{data.title}</div>
        </div>

        <Button
          style={{ fontFamily: 'jua' }}
          onClick={() => {
            window.open(`${data.siteUrl}`, '_blank');
          }}
        >
          사이트 바로가기
        </Button>
        <ToolTip
          style={{ fontFamily: 'jua' }}
          titleText={`모집기간 | ${data.recruitmentPeriod}`}
          hideText={'모집기간'}
        />

        {data.qualification && (
          <ToolTip
            style={{ fontFamily: 'jua' }}
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
          <SpeechBubbleLeft>
            <div>상세 일정은 공식 사이트에서 확인 부탁드립니다</div>
            <br />
            <div>모집 일자는 변경될 수 있습니다</div>
          </SpeechBubbleLeft>
          <SpeechBubbleRight>
            <div>모집이 시작되었을 때 알림이 받고 싶다면</div>
            <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                onClick={() => {
                  window.open('https://pf.kakao.com/_xgKxhNb', '_blank');
                }}
                src="/images/kakaochannel.png"
                alt="kakao"
                width="40px"
                height="40px"
                style={{ marginRight: '10px', cursor: 'pointer' }}
              />{' '}
              <div>ITogether 채널을 추가해주세요!</div>
            </div>
          </SpeechBubbleRight>
        </div>
      </div>
    </AppLayout>
  );
};
export default DetailInfo;
