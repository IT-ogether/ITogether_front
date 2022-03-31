import KakaoLogin from './KakaoLogin';
import KakaoLogout from './KakaoLogout';

//TODO : 추후 검색창 추가
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">ITogether(로고)</div>
      <div></div>
      {localStorage.getItem('isLogin') === null ? (
        <KakaoLogin />
      ) : (
        <KakaoLogout />
      )}
    </div>
  );
};

export default Header;
