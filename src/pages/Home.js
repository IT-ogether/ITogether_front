import AppLayout from '../components/AppLayout';
<<<<<<< Updated upstream
import HomeScrolls from '../components/HomeScrolls';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <HomeScrolls />
      </div>
    </div>
=======
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <AppLayout>
      <div className="mainInfoBtn">
        <Link to="./MainInfo" style={{ textDecoration: 'none' }}>
          <Button variant="outlined">goTo mainInfo</Button>
        </Link>
      </div>
    </AppLayout>
>>>>>>> Stashed changes
  );
};
export default Home;
