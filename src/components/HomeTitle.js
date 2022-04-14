import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const HomeTitle = () => {
  return (
    <div className="Home">
      <div>
        <div className="Home_Title">ITogether</div>
        <div className="Home_SubTitle">
          개발자들을 위한 모든 정보들
          <br />
          <div className="Home_Text">
            공모전, 동아리 교육들까지
            <br />꼭 필요한 IT 정보들을 알려드릴게요
          </div>
        </div>
      </div>
      <div className="mainInfoBtn">
        <Link to="./maininfo" style={{ textDecoration: 'none' }}>
          <Button variant="outlined">goTo mainInfo</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeTitle;
