import React from 'react';
import useStyles from './styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Typography} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Posts=({post,HandleImageClick})=> {

  const classes = useStyles();
  return (
    <div onClick={()=>HandleImageClick(true,post)} className={classes.root} style={{backgroundImage:`url(${post.urls.full})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover',cursor: 'zoom-in'}}>
     <div className={classes.text}>
        <div className={classes.head}>
            <img style={{width:'40px',height:'40px'}} className="rounded-circle" src={post.user.profile_image.large} alt={post.user.first_name}/>
            <div className={classes.NameTime}>
              <h2 className={classes.username}>{post.user.username}</h2>
              <Typography className={classes.time} variant="body2">{moment(post.created_at).fromNow()} </Typography>
            </div>
        </div>
        
          <IconButton className={classes.likes} aria-label="add to favorites">
            <FavoriteIcon /> &nbsp; <Typography className={classes.likeCounts} variant="body2">{post.likes}</Typography> 
          </IconButton>
        
  </div>
    </div>
  );
}
export default Posts;