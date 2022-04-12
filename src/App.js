import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainInfo from './pages/MainInfo';
import DetailInfo from './pages/DetailInfo';
import Auth from './Auth';

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
            path="/detailinfo/:category/:informationId"
            element={<DetailInfo />}
          />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
