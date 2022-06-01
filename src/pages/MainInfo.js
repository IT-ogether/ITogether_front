import React, { useState, useEffect, useCallback } from 'react';
import Pagination from '@mui/material/Pagination';
import AppLayout from '../components/AppLayout';
import Contents from '../components/Contents';
import Category from '../components/Category';
import { request } from '../components/config/axios';
import Recommend from '../components/recommend/Recommend';
import { getPreferenceAsyncThunk, getUserNameAsyncThunk } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const MainInfo = () => {
  const dispatch = useDispatch();
  const [temp, setTemp] = useState();
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

  const setPaginationProps = (totalCount, perPageNum) => {
    // console.log('totalCount' + totalCount + 'perPageNum:' + perPageNum);
    setTmpPage(Math.ceil(totalCount / perPageNum));
  };

  const getData = async () => {
    // console.log('chosenCateogry', chosenCategory);
    // console.log('currentPage', currentPage);
    await request
      .get(`/main-info/${chosenCategory}?pageNum=${currentPage}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        // console.log(data.pageDTO.cri.perPageNum);
        setPaginationProps(
          data.pageDTO.totalCount,
          data.pageDTO.cri.perPageNum
        );
        setData(data.mainInfo);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
    if (localStorage.getItem('isLogged') != null)
      setIsLogin((isLogged) => true);
    else setIsLogin(false);
  }, []);

  useEffect(() => {
    console.log('in');
    dispatch(getPreferenceAsyncThunk());
    dispatch(getUserNameAsyncThunk());
  }, []);

  const [chosenCategory, setChosenCategory] = useState('club');
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [tmpPage, setTmpPage] = useState(1);
  const [isLogin, setIsLogin] = useState(false);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setTotalPage(tmpPage);
  }, [handlePageChange, tmpPage]);

  useEffect(() => {
    setCurrentPage(1);
    getData();
  }, [chosenCategory]);

  useEffect(() => {
    getData();
  }, [currentPage]);

  return (
    <AppLayout>
      <div>{isLogin && <Recommend />}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Category
          categories={categories}
          setChosenCategory={setChosenCategory}
        />
        <div>
          <Contents data={data} category={chosenCategory} />
        </div>
        <Pagination
          page={currentPage}
          onChange={handlePageChange}
          count={totalPage}
          color="primary"
        />
      </div>
    </AppLayout>
  );
};
export default MainInfo;
