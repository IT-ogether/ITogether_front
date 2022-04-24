import './App.css';
import React, { useCallback, useReducer, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainInfo from './pages/MainInfo';
import DetailInfo from './pages/DetailInfo';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

const loginreducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      const ret = window.localStorage.getItem('accessToken') ? true : false;
      return ret;
    }
    case 'TOGGLELOGIN': {
      return !state;
    }
    case 'LOGOUT': {
      return !state;
    }
    default:
      return state;
  }
};

export const LoginContext = React.createContext();
export const LoginDispatchContext = React.createContext();

function App() {
  const [login, dispatch] = useReducer(loginreducer, false);
  const kakao = window.Kakao;
  useEffect(() => {
    async function getLocalLogin() {
      const localLogin2 = localStorage.getItem('accessToken');
      return localLogin2;
    }
    const localLogin = getLocalLogin();
    if (localLogin) {
      dispatch({ type: 'INIT', data: localLogin });
    }
  }, []);
  useEffect(() => {
    kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }, [kakao]);

  const r_login = (state) => {
    dispatch({ type: 'TOGGLELOGIN', data: state });
  };

  const r_logout = (state) => {
    window.localStorage.removeItem('accessToken');
    dispatch({ type: 'LOGOUT', data: state });
  };

  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={{ r_login, r_logout }}>
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
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </div>
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
