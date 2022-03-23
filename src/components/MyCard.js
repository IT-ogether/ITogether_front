import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HashTag from './HashTag';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ToolTip from './ToolTip';
export default function MyCard({
  id,
  title,
  logo,
  recruitment_period,
  fields,
  category
}) {
  const [liked, setLiked] = useState(false);
  const onToggleLike = () => {
    setLiked((prev) => !prev);
  };
  const navigate = useNavigate();
  return (
    <div className="MyCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="avatar" sx={{ bgcolor: red[500] }} src={logo} />}
          title={title}
          subheader={
            <ToolTip titleText={recruitment_period} hideText={'모집기간'} />
          }
          onClick={() => navigate(`/detailinfo/${category}/${id}`)}
        />
        <CardContent>
          <HashTag fields={fields} />
        </CardContent>
        <CardContent>
          <HashTag fields={fields} />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={onToggleLike} aria-label="add to favorites">
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
