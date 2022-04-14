import { useState, useEffect, useRef } from 'react';
import { request } from '../components/config/axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Popularity = () => {
  const [datas, setDatas] = useState([]);
  const aa = 'sibal';
  const textDatas = [
    {
      siteUrl: 'http://sopt.org/wp/',
      recuriment: '3월, 9월',
      active_period: '4개월',
      details: 'Shout Our Passion Together 대학생 연합 동아리'
    },
    {
      siteUrl: 'https://www.swmaestro.org/sw/main/main.do',
      recuriment: '1-2월',
      active_period: '8개월',
      details: '세상을 움직이는 최고급 SW 인재양성의 메카'
    },
    {
      siteUrl: 'https://www.worlditshow.co.kr/main/main.php',
      recuriment: '4월',
      active_period: '2022년 4월 22일',
      details:
        '디지털 전환을 위한 원스톱 플랫폼, 월드IT쇼. 차세대 첨단산업을 주도하는 대표 전시회 2022 월드IT쇼'
    },
    {
      siteUrl: 'https://cloud.google.com/certification/cloud-engineer?hl=ko',
      recuriment: '링크 참조',
      active_period: '링크 참조',
      details: 'Google Cloud Console과 CLI(Command Line Interface) 자격증'
    },
    {
      siteUrl: 'https://boostcamp.connect.or.kr/program_ai.html?r=boottent',
      recuriment: '10월경',
      active_period: '5개월',
      details:
        ' AI 문제정의/서비스요청사항 문제정의 및 데이터 확보/DATA annotation/모델 개발 평가 피드백/AI product 개발 사이클 이해 실전'
    },
    {
      siteUrl:
        'http://autonomouscar.or.kr/_rb/_view.html?Ncode=b1&number=20&page=1',
      recuriment: '2022년 6월경 예선',
      active_period: '4개월',
      details: '2022 대학생 자율주행 경진대회'
    }
  ];

  SwiperCore.use([Navigation, Autoplay]);

  let i = 0;
  const dataList = datas.map((data) => (
    <SwiperSlide key={i}>
      <br />
      <div className="Swiper_Data">
        <img src={data.logo}></img>
        <br />
        {data.informationTitle} <br />
        <br />
        <a href={textDatas[i].siteUrl} className="Swiper_Button">
          사이트 바로가기
        </a>
        <div className="Swiper_Text">
          <br />
          <br />
          <div className="Swiper_SubTitle">지원기간</div>
          <div className="Swiper_SubText">{textDatas[i].recuriment}</div>
          <div className="Swiper_SubTitle">활동기간</div>
          <div className="Swiper_SubText"> {textDatas[i].active_period}</div>
          <div className="Swiper_SubTitle">간략정보</div>
          <div className="Swiper_SubText">{textDatas[i].details}</div>
        </div>
      </div>
      {(i = i + 1)}
    </SwiperSlide>
  ));
  useEffect(() => {
    const getPopular = async () => {
      await request
        .get('/popularity')
        .then((response) => {
          setDatas((datas) => response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getPopular();
  }, []);
  return (
    <Swiper autoplay={{ delay: 3000 }} className="Swiper">
      {dataList}
    </Swiper>
  );
};

export default Popularity;
