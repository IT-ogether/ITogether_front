import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainInfo from './pages/MainInfo';
import DetailInfo from './pages/DetailInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maininfo" element={<MainInfo />} />
          <Route path="/detailinfo/:category/:id" element={<DetailInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
