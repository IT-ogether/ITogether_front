import React, { useState, useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import Contents from '../components/Contents';
import Category from '../components/Category';
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
      value: 'semina',
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
  const club = [
    {
      id: 1,
      title: '프로그라피',
      siteUrl: 'https://prography.org/',
      logo: 'https://user-images.githubusercontent.com/72402747/159286868-9c8ae539-7fb9-4c67-87e9-cf32708143c6.png',
      recruitment_period: '3,4월',
      activity_period: '5개월',
      qualifications: ['대학생', '직장인'],
      fields: ['프론트엔드', '백엔드', '디자이너', 'ios', '안드로이드'],
      details: '활동비 10만원'
    },
    {
      id: 2,
      title: 'YAPP',
      siteUrl: 'https://prography.org/',
      logo: 'https://user-images.githubusercontent.com/72402747/159286868-9c8ae539-7fb9-4c67-87e9-cf32708143c6.png',
      recruitment_period: '3,9월',
      activity_period: '4개월',
      qualifications: ['대학생', '직장인'],
      fields: ['프론트엔드', '백엔드', '디자이너', 'ios', '안드로이드'],
      details: '디테일!!'
    },
    {
      id: 3,
      title: 'YAPP321312',
      siteUrl: 'https://prography.org/',
      logo: 'https://user-images.githubusercontent.com/72402747/159286868-9c8ae539-7fb9-4c67-87e9-cf32708143c6.png',
      recruitment_period: '3,9월',
      activity_period: '4개월',
      qualifications: ['대학생', '직장인'],
      fields: ['프론트엔드', '백엔드', '디자이너', 'ios', '안드로이드'],
      details: '디테일!231!'
    }
  ];

  const kdt = [
    {
      id: 1,
      title: '프로그래머스 웹 데브코스',
      siteUrl: 'https://prography.org/',
      logo: 'https://user-images.githubusercontent.com/72402747/159286868-9c8ae539-7fb9-4c67-87e9-cf32708143c6.png',
      recruitment_period: '2-3월',
      activity_period: '5개월',
      qualifications: ['대학생', '직장인'],
      fields: ['프론트엔드', '백엔드'],
      details: '하루 5시간 코어타임 있음'
    }
  ];

  const [chosenCategory, setChosenCategory] = useState('club');
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
        {/* <Contents data={club} /> */}
        {chosenCategory === 'club' && <Contents data={club} />}
        {chosenCategory === 'kdt' && <Contents data={kdt} />}
      </div>
    </AppLayout>
  );
};
export default MainInfo;
