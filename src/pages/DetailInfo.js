import AppLayout from '../components/AppLayout';
import HashTag from '../components/HashTag';
import ToolTip from '../components/ToolTip';
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import SpeechBubbleLeft from '../components/SpeechBubble/SpeechBubbleLeft';
import SpeechBubbleRight from '../components/SpeechBubble/SpeechBubbleRight';
// const club_temp = {
//   id: 1,
//   title: '프로그라피',
//   siteUrl: 'https://prography.org/',
//   logo: 'https://user-images.githubusercontent.com/72402747/159286868-9c8ae539-7fb9-4c67-87e9-cf32708143c6.png',
//   recruitment_period: '3,4월',
//   activity_period: '5개월',
//   qualifications: ['대학생', '직장인'],
//   fields: ['프론트엔드', '백엔드', '디자이너', 'ios', '안드로이드'],
//   details: '활동비 10만원'
// }

const DetailInfo = () => {
  const { id, category } = useParams();

  //TODO: 카테고리별 id를 주면 그에 해당하는 데이터 받아옴

  return (
    <AppLayout>
      <Box>
        <Box className="detailinfo__title">프로그라피</Box>
        <Button
          onClick={() => {
            window.open('https://prography.org/', '_blank');
          }}
        >
          사이트 바로가기
        </Button>
        <ToolTip titleText={'3월 - 4월'} hideText={'모집기간'} />
        <HashTag
          fields={['프론트엔드', '백엔드', '디자이너', 'ios', '안드로이드']}
        />

        <Box>지원자격</Box>
        <Box>
          <SpeechBubbleLeft text={'모집일자는 변경될 수 있습니다 '} />
          <SpeechBubbleRight
            text={
              '모집이 시작되었을 때 알림이 받고 싶다면 ~ 채널을 추가해주세요!'
            }
          />
        </Box>
      </Box>
    </AppLayout>
  );
};
export default DetailInfo;
