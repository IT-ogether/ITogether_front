import Button from '@mui/material/Button';

//TODO : 추후 검색창 추가
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">ITogether(로고)</div>
      <div></div>
      <Button variant="outlined">LOGIN</Button>
    </div>
  );
};

export default Header;
