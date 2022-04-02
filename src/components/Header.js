import KakaoLoginOut from './KakaoLoginOut';

//TODO : 추후 검색창 추가
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">ITogether(로고)</div>
      <div>
        <KakaoLoginOut />
      </div>
    </div>
  );
};

export default Header;
