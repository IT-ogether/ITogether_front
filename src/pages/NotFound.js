import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '500px',
        alignItems: 'center'
      }}
    >
      <div>404 NotFound</div>
      <div>페이지를 찾을 수 없습니다.</div>
      <Button onClick={() => navigate('/maininfo')}>홈으로 돌아가기</Button>
    </div>
  );
};

export default NotFound;
