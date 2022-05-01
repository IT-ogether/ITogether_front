import { useNavigate } from 'react-router-dom';
const DUMMYDATA = {
  name: 'ㅇㅇ',
  category: '프론트엔드',
  recommends: [
    {
      informationId: 1,
      title: '넥스터즈',
      url: 'http://teamnexters.com/',
      category: 'club'
    },
    {
      informationId: 2,
      title: 'SOPT',
      url: 'http://sopt.org/wp/',
      category: 'club'
    }
  ]
};

const Recommend = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px'
      }}
    >
      <div
        style={{
          fontSize: 30
        }}
      >
        {DUMMYDATA.name}님을 위한
        {DUMMYDATA.category} 활동들
      </div>
      {DUMMYDATA.recommends.map((recommend) => (
        <div
          style={{
            border: '1px solid gray',
            padding: '10px',
            margin: '10px',
            cursor: 'pointer'
          }}
          onClick={() =>
            navigate(
              `/detailinfo/${recommend.category}/${recommend.informationId}`
            )
          }
        >
          {recommend.title}
        </div>
      ))}
    </div>
  );
};
export default Recommend;
