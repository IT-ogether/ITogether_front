import axios from 'axios';

export const request = axios.create({
  baseURL: `${process.env.REACT_APP_URL}` // 기본 서버 주소 입력
});
