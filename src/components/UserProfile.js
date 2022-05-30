import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom';
const Profiles = () => {
  return (
    <div>
      <Link to="/profile">
        <AssignmentIndIcon className="Profile__btn" />
      </Link>
    </div>
  );
};

export default Profiles;
