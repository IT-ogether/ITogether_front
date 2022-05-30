import { useParams } from 'react-router-dom';

const Result = ({ location }) => {
  const { category } = useParams();

  return <div> {category} RESULT</div>;
};

export default Result;
