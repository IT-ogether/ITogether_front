import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HashTag = ({ fields }) => {
  const dataLists = [
    { id: 1, data: 'frontend', value: '프론트엔드' },
    { id: 2, data: 'backend', value: '백엔드' },
    { id: 3, data: 'ios', value: 'ios' },
    { id: 4, data: 'android', value: '안드로이드' },
    { id: 5, data: 'AI', value: '인공지능' },
    { id: 6, data: 'cloud-computing', value: '클라우드 컴퓨팅' },
    { id: 7, data: 'security', value: '보안' },
    { id: 8, data: 'data-processing', value: '데이터처리' },
    { id: 9, data: 'algorithm', value: '알고리즘' },
    { id: 10, data: 'designer', value: '디자이너' },
    { id: 11, data: 'database', value: '데이터베이스' }
  ];

  const getData = (name) => {
    console.log(name);
    const ret = dataLists.findIndex((it) => it.value === name);
    return dataLists[ret].data;
  };

  const navigate = useNavigate();

  return (
    <Box>
      {fields.map((it) => (
        <Button
          onClick={() => {
            const field = getData(it);
            navigate(`/result/${field}`);
          }}
          style={{ fontFamily: 'jua' }}
          className="HashTag__btn"
          key={it}
        >
          #{it}
        </Button>
      ))}
    </Box>
  );
};
HashTag.propTypes = {
  fields: PropTypes.array.isRequired
};

export default HashTag;
