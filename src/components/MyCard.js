import React, { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { addBookMarkAsyncThunk, delBookMarkAsyncThunk } from '../actions';

export default function MyCard({
  category,
  informationId,
  title,
  logo,
  recruitmentPeriod,
  fields
}) {
  const bookMarks = useSelector((state) => state.bookMarks);
  const dispatch = useDispatch();

  const [liked, setLiked] = useState(false);

  const likedInit = () => {
    console.log(bookMarks);
    bookMarks.map((it) => {
      if (informationId === it) {
        console.log(it + 'liked!');
        setLiked((state) => true);
        return false;
      }
    });
  };
  const postBookMark = async () => {
    console.log('add: ' + informationId);
    dispatch(addBookMarkAsyncThunk(informationId));
  };

  const delBookMark = async () => {
    console.log('del: ' + informationId);
    dispatch(delBookMarkAsyncThunk(informationId));
  };
  const onToggleLike = async () => {
    if (localStorage.getItem('isLogged')) {
      if (!liked) {
        await postBookMark();
      } else {
        await delBookMark();
      }
      setLiked((prev) => !prev);
    } else {
      alert('로그인 해주세요!');
    }
  };

  useEffect(() => likedInit(), []);
  const navigate = useNavigate();
  return (
    <div className="MyCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          style={{ fontFamily: 'jua' }}
          avatar={<Avatar alt="avatar" sx={{ bgcolor: red[500] }} src={logo} />}
          title={title}
          subheader={
            <ToolTip titleText={recruitmentPeriod} hideText={'모집기간'} />
          }
          onClick={() => navigate(`/detailinfo/${category}/${informationId}`)}
        />
        <CardContent>
          <HashTag fields={fields} />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={onToggleLike} aria-label="add to favorites">
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton aria-label="share">
            <KakaoShareButton title={title} imgUrl={logo} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

MyCard.propTypes = {
  informationId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  recruitmentPeriod: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired
};
