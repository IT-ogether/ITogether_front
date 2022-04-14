import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom';
const UserProfile = () => {
  return (
    <div>
      <Link to="/profile">
        <AssignmentIndIcon />
      </Link>
    </div>
  );
};

export default UserProfile;
