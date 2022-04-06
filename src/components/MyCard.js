import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoShareButton from './KakaoShareBtn';
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
import ToolTip from './ToolTip';
export default function MyCard({
  category,
  information_Id,
  information_title,
  logo,
  recruitment_period,
  fields
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
          title={information_title}
          subheader={
            <ToolTip titleText={recruitment_period} hideText={'모집기간'} />
          }
          onClick={() => navigate(`/detailinfo/${category}/${information_Id}`)}
        />
        <CardContent>
          <HashTag fields={fields} />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={onToggleLike} aria-label="add to favorites">
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton aria-label="share">
            <KakaoShareButton title={information_title} imgUrl={logo} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

MyCard.propTypes = {
  information_Id: PropTypes.number.isRequired,
  information_title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  recruitment_period: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired
};
