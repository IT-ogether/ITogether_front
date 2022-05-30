import MyCard from './MyCard';
import { request } from '../components/config/axios';
import { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookMarkAsyncThunk } from '../actions';

const Contents = ({ data, category }) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(data);

  const getBookMarks = async () => {
    await dispatch(getBookMarkAsyncThunk());
    setIsLoaded((state) => true);
  };

  useEffect(() => {
    if (localStorage.getItem('isLogged') !== null) {
      getBookMarks();
    } else {
      setIsLoaded((state) => true);
    }
  }, []);
  return (
    <div className="Contents">
      {isLoaded === true
        ? data.map((it) => (
            <MyCard key={it.informationId} {...it} category={category} />
          ))
        : null}
    </div>
  );
};

export default Contents;
