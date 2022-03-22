import * as React from 'react';
import HashTag from './HashTag';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
export default function MyCard({
  id,
  title,
  logo,
  recruitment_period,
  fields
}) {
  console.log(fields);
  return (
    <div className="MyCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="avatar" sx={{ bgcolor: red[500] }} src={logo} />}
          title={title}
          subheader={recruitment_period}
        />
        <CardContent>
          <HashTag fields={fields} />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              onClick={() => {
                alert('즐겨찾기 추후 구현');
              }}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon
              onClick={() => {
                alert('공유하기 추후 구현');
              }}
            />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

MyCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  recruitment_period: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired
};
