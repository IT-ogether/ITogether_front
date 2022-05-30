import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import React, { useCallback, useReducer, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainInfo from './pages/MainInfo';
import DetailInfo from './pages/DetailInfo';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Result from './pages/Result';

const THEME = createTheme({
  typography: {
    fontFamily: ['jua', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'jua';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('jua'), local('jua'), 
          url(https://fonts.googleapis.com/css2?family=Jua&display=swap) 
          format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, 
            U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, 
            U+2215, U+FEFF, U+FFFD;
        }
      `
    }
  }
});

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
    <ThemeProvider theme={THEME}>
      <LoginContext.Provider value={login}>
        <LoginDispatchContext.Provider value={{ r_login, r_logout }}>
          <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/maininfo" element={<MainInfo />} />
                <Route
                  path="/detailinfo/:category/:informationId"
                  element={<DetailInfo />}
                />
                <Route path="/result/:category" element={<Result />} />
                <Route path="/oauth/kakao/callback" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </BrowserRouter>
          </div>
        </LoginDispatchContext.Provider>
      </LoginContext.Provider>
    </ThemeProvider>
  );
}

export default App;
