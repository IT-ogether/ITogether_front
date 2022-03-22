import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
const HashTag = ({ fields }) => {
  return (
    <Box>
      {fields.map((it) => (
        <Button className="HashTag__btn" key={it}>
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
