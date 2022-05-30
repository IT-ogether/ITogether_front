import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { request } from '../components/config/axios';
import Pagination from '@mui/material/Pagination';
import Contents from '../components/Contents';

const Result = () => {
  const { category } = useParams();

  const [totalPage, setTotalPage] = useState(1);
  const [data, setData] = useState([]);
  const [tmpPage, setTmpPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const getCategoryData = async () => {
    console.log('category', category);
    await request
      .get(`/main-info?field=${category}?pageNum=${currentPage}`, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8'
        }
      })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setPaginationProps(
          data.pageDTO.totalCount,
          data.pageDTO.cri.perPageNum
        );
        setData(data.mainInfo);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getCategoryData();
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const setPaginationProps = (totalCount, perPageNum) => {
    // console.log('totalCount' + totalCount + 'perPageNum:' + perPageNum);
    setTmpPage(Math.ceil(totalCount / perPageNum));
  };

  useEffect(() => {
    setTotalPage(tmpPage);
  }, [handlePageChange, tmpPage]);

  return (
    <div>
      {category} RESULT
      <Contents data={data} category={category} />
      <Pagination
        page={currentPage}
        onChange={handlePageChange}
        count={totalPage}
        color="primary"
      />
    </div>
  );
};

export default Result;
