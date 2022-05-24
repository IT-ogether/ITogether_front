import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { request } from '../components/config/axios';

const KakaoShareButton = ({ id, title, imgUrl }) => {
  const kakao = window.Kakao;

  //확인용으로 남겨둡니다! js키에용
  console.log(process.env.REACT_APP_KAKAO_KEY);

  const shareKakao = async () => {
    await request
      .put(
        `/count/${id}`,
        { body: null },
        {
          headers: {
            token: window.localStorage.getItem('accessToken'),
            'Content-type': 'text/html; charset=utf-8'
          }
        }
      )
      .then((res) => console.log(res));

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `ITogether에서 ${title}정보를 알아보세요!`,
        description: `${title}에 관련된 내용이 더 궁금하다면 아래 버튼을 눌러주세요!`,
        imageUrl: imgUrl,
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com'
        }
      },
      buttons: [
        {
          title: 'ITogether에서 확인하기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com'
          }
        }
      ]
    });
  };

  return (
    <div className="kakao-share-button">
      <ShareIcon onClick={shareKakao} />
    </div>
  );
};

export default React.memo(KakaoShareButton);
