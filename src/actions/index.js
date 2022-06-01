import { request } from '../components/config/axios';

//Action creators for thunk
export const getPreferenceAsyncThunk = () => async (dispatch, getState) => {
  await request
    .get(process.env.REACT_APP_URL + '/preference', {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    })
    .then((res) => {
      dispatch({
        type: 'GET-PREFERENCE',
        payload: res.data.field
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return 'GET-PREFERENCE';
};

export const getUserNameAsyncThunk = () => async (dispatch, getState) => {
  await request
    .get(process.env.REACT_APP_URL + '/profile', {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: 'GET-USERNAME',
        payload: res.data.nickName
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return 'GET-USERNAME';
};

export const getBookMarkAsyncThunk = () => async (dispatch, getState) => {
  await request
    .get(process.env.REACT_APP_URL + '/bookmarks', {
      headers: {
        token: localStorage.getItem('accessToken')
      }
    })
    .then((res) => {
      let arr = [];
      res.data.map((it) => {
        arr.push(it.informationId);
      });
      dispatch({ type: 'GET-BOOKMARK', payload: arr });
      // console.log('first');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addBookMarkAsyncThunk = (props) => async (dispatch, getState) => {
  const data = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      token: localStorage.getItem('accessToken')
    },
    body: JSON.stringify({
      informationId: props
    })
  };
  await fetch(process.env.REACT_APP_URL + '/bookmarks', data)
    .then((res) => {
      dispatch({
        type: 'ADD-BOOKMARK',
        payload: props
      });
    })
    .catch((error) => console.log(error));
  return {
    type: 'ADD-BOOKMARK'
  };
};

export const delBookMarkAsyncThunk = (props) => async (dispatch, getState) => {
  const data = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      token: localStorage.getItem('accessToken')
    }
  };
  fetch(process.env.REACT_APP_URL + '/bookmarks/' + props, data)
    .then((res) =>
      dispatch({
        type: 'DEL-BOOKMARK',
        payload: props
      })
    )
    .catch((error) => console.log(error));

  return {
    type: 'DEL-BOOKMARK'
  };
};
