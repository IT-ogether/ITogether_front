import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { request } from '../components/config/axios';

const KakaoShareButton = ({ id, title, imgUrl }) => {
  const kakao = window.Kakao;

  //확인용으로 남겨둡니다! js키에용
  console.log(process.env.REACT_APP_KAKAO_KEY);

  const shareKakao = async () => {
    // TODO : 서버통신구현
    await request.put(`/count/${id}`).then((res) => console.log(res));

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
