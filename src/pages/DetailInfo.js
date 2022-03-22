import AppLayout from '../components/AppLayout';
import { useParams } from 'react-router-dom';
const DetailInfo = () => {
  const { id, category } = useParams();

  return (
    <AppLayout>
      <div>DETAIL INFO : 혜경</div>
      <div>{id}</div>
      <div>{category}</div>
    </AppLayout>
  );
};
export default DetailInfo;
