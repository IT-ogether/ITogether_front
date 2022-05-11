import KakaoLoginOut from './KakaoLoginOut';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../App';

//TODO : 추후 검색창 추가
const Header = () => {
  const navigate = useNavigate();
  const hanldeLogoClick = (e) => {
    navigate('/maininfo');
  };
  return (
    <div className="Header">
      <div className="Header__logo" onClick={hanldeLogoClick}>
        <img
          style={{ width: '100px', height: '30px' }}
          src="/images/logo_itogether.png"
        />
      </div>
      <div>
        <KakaoLoginOut />
      </div>
    </div>
  );
};

export default Header;
