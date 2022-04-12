import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="Footer">
      <CopyrightIcon
        fontSize="inherit"
        style={{ fontSize: '50x', marginRight: '10px' }}
      />
      <div>2022 IT모 - All rights reserved</div>
      <GitHubIcon
        href="https://github.com/IT-ogether"
        style={{ marginLeft: '10px' }}
        onClick={() => {
          window.open('https://github.com/IT-ogether', '_blank');
        }}
      ></GitHubIcon>
    </div>
  );
};
export default Footer;
