import React, { useState, useEffect, useCallback } from 'react';
import Pagination from '@mui/material/Pagination';
import AppLayout from '../components/AppLayout';
import Contents from '../components/Contents';
import Category from '../components/Category';
import { request } from '../components/config/axios';
import Recommend from '../components/recommend/Recommend';

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

  const setPaginationProps = (data) => {
    const { totalCount, displayPageNum } = data;
    console.log(totalCount, displayPageNum);
    const tmpPage = parseInt(totalCount / displayPageNum);
    totalCount % displayPageNum === 0
      ? setTotalPage((tmpPage) => {
          return tmpPage;
        })
      : setTotalPage(tmpPage + 1);
  };

  const getData = async () => {
    console.log('chosenCateogry', chosenCategory);
    console.log('currentPage', currentPage);
    await request
      .get(`/main-info/${chosenCategory}?pageNum=${currentPage}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setPaginationProps(data.pageDTO);
        setData(data.mainInfo);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => getData(), []);

  const [chosenCategory, setChosenCategory] = useState('club');
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    console.log('value ', value);
    setCurrentPage(value);
    console.log(`curentPage : `, currentPage);
  };

  useEffect(() => {
    console.log(`curentPage : `, currentPage);
  }, [handlePageChange]);

  useEffect(() => {
    console.log(chosenCategory);
    setCurrentPage(1);
    getData();
  }, [chosenCategory]);

  return (
    <AppLayout>
      <div>
        <Category
          categories={categories}
          setChosenCategory={setChosenCategory}
        />
        <Contents data={data} category={chosenCategory} />
        <Pagination
          page={currentPage}
          onChange={handlePageChange}
          count={totalPage}
          color="primary"
        />
      </div>
      <div>{/* <Recommend /> */}</div>
    </AppLayout>
  );
};
export default MainInfo;
