import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const HomeTitle = () => {
  return (
    <div className="Home">
      <div>
        <h1>개발자들을 위한 모든 IT 정보들</h1>
        <p>공모전, 동아리, 교육들까지</p>
        <p>꼭 필요한 IT 정보들을 알려드릴게요.</p>
      </div>
      <div className="mainInfoBtn">
        <Link to="./MainInfo" style={{ textDecoration: 'none' }}>
          <Button variant="outlined">goTo mainInfo</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeTitle;
