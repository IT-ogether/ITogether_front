import MyCard from './MyCard';
import { request } from '../components/config/axios';
import { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookMarkAsyncThunk } from '../actions';

const Contents = ({ data, category }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  console.log(data);

  const getBookMarks = async () => {
    await dispatch(getBookMarkAsyncThunk());
    setLoading((state) => true);
  };

  useEffect(() => {
    if (localStorage.getItem('isLogged') !== null) {
      getBookMarks();
    } else {
      setLoading((state) => true);
    }
  }, []);
  return (
    <div className="Contents">
      {loading === true
        ? data.map((it) => (
            <MyCard key={it.informationId} {...it} category={category} />
          ))
        : null}
    </div>
  );
};

export default Contents;
