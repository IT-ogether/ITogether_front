import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainInfo from './pages/MainInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maininfo" element={<MainInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
