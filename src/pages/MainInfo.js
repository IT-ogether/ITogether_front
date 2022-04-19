import React, { useState, useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import Contents from '../components/Contents';
import Category from '../components/Category';
import { request } from '../components/config/axios';

const MainInfo = () => {
  const categories = [
    {
      value: 'club',
      name: '동아리'
    },
    {
      value: 'education',
      name: '교육'
    },
    {
      value: 'seminar',
      name: '세미나'
    },
    {
      value: 'certificate',
      name: '자격증'
    },
    {
      value: 'kdt',
      name: '국비지원'
    }
  ];
  useEffect(() => {
    const getClubData = async () => {
      await request
        .get('/main-info/club')
        .then((res) => {
          return res.data;
        })
        .then((data) => setClub(data))
        .catch((e) => console.log(e));
    };

    const getKdtData = async () => {
      await request
        .get('/main-info/kdt')
        .then((res) => {
          return res.data;
        })
        .then((data) => setKdt(data))
        .catch((e) => console.log(e));
    };

    const getSeminarData = async () => {
      await request
        .get('/main-info/seminar')
        .then((res) => {
          return res.data;
        })
        .then((data) => setSeminar(data))
        .catch((e) => console.log(e));
    };

    const getEducationData = async () => {
      await request
        .get('/main-info/education')
        .then((res) => {
          return res.data;
        })
        .then((data) => setEducation(data))
        .catch((e) => console.log(e));
    };

    const getCertificate = async () => {
      await request
        .get('/main-info/certificate')
        .then((res) => {
          return res.data;
        })
        .then((data) => setCertificate(data))
        .catch((e) => console.log(e));
    };

    getClubData();
    getKdtData();
    getSeminarData();
    getCertificate();
    getEducationData();
  }, []);

  const [chosenCategory, setChosenCategory] = useState('club');
  const [club, setClub] = useState([]);
  const [education, setEducation] = useState([]);
  const [seminar, setSeminar] = useState([]);
  const [certificate, setCertificate] = useState([]);
  const [kdt, setKdt] = useState([]);

  const getDataByCategory = (category) => {
    if (category === 'certificate') return certificate;
    else if (category === 'club') return club;
    else if (category === 'seminar') return seminar;
    else if (category === 'education') return education;
    else if (category === 'kdt') return kdt;
    else if (category === 'certificate') return certificate;
  };

  useEffect(() => {
    console.log(chosenCategory);
  }, [chosenCategory]);
  return (
    <AppLayout>
      <div>
        <Category
          categories={categories}
          setChosenCategory={setChosenCategory}
        />

        <Contents
          data={getDataByCategory(chosenCategory)}
          category={chosenCategory}
        />
      </div>
    </AppLayout>
  );
};
export default MainInfo;
