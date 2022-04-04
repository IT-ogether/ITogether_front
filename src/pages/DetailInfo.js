import AppLayout from '../components/AppLayout';
import HashTag from '../components/HashTag';
import ToolTip from '../components/ToolTip';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from '@mui/material';
import SpeechBubbleLeft from '../components/SpeechBubble/SpeechBubbleLeft';
import SpeechBubbleRight from '../components/SpeechBubble/SpeechBubbleRight';

const DetailInfo = () => {
  const { id, category } = useParams();

  const data = {
    information_id: 11,
    information_title: 'SOPT',
    site_url: 'http://sopt.org/wp/',
    logo: 'http://sopt.org/wp/wp-content/uploads/2014/01/30_sopt_logo-1.png',
    recruitment_period: '3월, 9월',
    activity_period: '4개월',
    qualifications: ['수도권 내 대학생'],
    fields: ['프론트엔드', '백엔드', 'ios', '안드로이드', '디자이너'],
    details: '디테일s'
  };

  //TODO: 카테고리별 id를 주면 그에 해당하는 데이터 받아옴

  return (
    <AppLayout>
      <div className="DetailInfo">
        <div className="DetailInfo__header">
          <div>
            <img className="DetailInfo__header__img" src={data.logo} />
          </div>
          <div className="DetailInfo__header__title">
            {data.information_title}
          </div>
        </div>

        <Button
          onClick={() => {
            window.open(`${data.site_url}`, '_blank');
          }}
        >
          사이트 바로가기
        </Button>
        <ToolTip
          titleText={`모집기간 | ${data.recruitment_period}`}
          hideText={'모집기간'}
        />

        <ToolTip
          titleText={`지원자격 | ${data.qualifications}`}
          hideText={'지원자격'}
        />
        <HashTag fields={data.fields} />

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
