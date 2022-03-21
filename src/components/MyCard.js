import * as React from 'react';
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
  fields,
}) {
  return (
    <div className="MyCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt="avatar" sx={{ bgcolor: red[500] }} src={logo} />}
          title={title}
          subheader={recruitment_period}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            #프론트엔드 #백엔드 #디자이너 #대학생 #직장인
          </Typography>
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

MyCard.defaultProps = {
  id: 1,
  title: '제목',
  logo: 'https://user-images.githubusercontent.com/72402747/159286868-9c8ae539-7fb9-4c67-87e9-cf32708143c6.png',
  recruitment_period: '모집기간',
  fileds: ['프론트엔드', '백엔드'],
};
