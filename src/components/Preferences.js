import { useState } from 'react';
import axios from 'axios';
import { request } from './config/axios';
import qs from 'qs';
import { RoomPreferences } from '@mui/icons-material';

const dataLists = [
  { id: 1, data: 'frontend' },
  { id: 2, data: 'backend' },
  { id: 3, data: 'ios' },
  { id: 4, data: 'android' },
  { id: 5, data: 'ai' },
  { id: 6, data: 'cloud' },
  { id: 7, data: 'security' },
  { id: 8, data: 'blockchain' }
];

const Preferences = () => {
  const [checkBoxIndex, setCheckBoxIndex] = useState();

  const checkOnlyOne = (checkThis) => {
    const checkBoxes = document.getElementsByName('checkBox');
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i] !== checkThis) {
        checkBoxes[i].checked = false;
      } else {
        setCheckBoxIndex((it) => i);
      }
    }
  };

  const printLists = (props) => {
    return (
      <div>
        <input
          key={props.id}
          type="checkbox"
          name="checkBox"
          onChange={(e) => checkOnlyOne(e.target)}
        />
        {props.data}
      </div>
    );
  };

  const saveClick = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        token: localStorage.getItem('accessToken')
      },
      body: JSON.stringify({
        field: dataLists[checkBoxIndex].data
      })
    };

    console.log(requestOptions.body);
    fetch(process.env.REACT_APP_URL + '/preference', requestOptions)
      .then(localStorage.setItem('preference', requestOptions.body.field))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        희망 직군 (한 가지만 선택해주세요!)
        <button onClick={saveClick}>저장</button>
      </div>
      <div className="HopeJob__CheckBox">
        {dataLists.map((list) => printLists(list))}
      </div>
    </div>
  );
};

export default Preferences;
