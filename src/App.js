import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainInfo from './pages/MainInfo';
import DetailInfo from './pages/DetailInfo';
import Auth from './api/Auth';
import Profile from './pages/Profile';

function App() {
  const kakao = window.Kakao;

  useEffect(() => {
    kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }, [kakao]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maininfo" element={<MainInfo />} />
          <Route
            path="/detailinfo/:category/:information_id"
            element={<DetailInfo />}
          />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
