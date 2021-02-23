import React from 'react';
import Modal from 'react-modal';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';
import moment from 'moment';
import {Typography,IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const PopupModal = ({open,setOpen,modal}) => {
    const classes=useStyles();
    if(!modal) return null;
    return (
        <div >
        <Modal  ariaHideApp={false} isOpen={open}>
        <CancelIcon className={classes.close} onClick={()=>setOpen(!open)}/>
        <div className={classes.head}>
        <div className={classes.heading}>
            <img style={{width:'40px',height:'40px'}} className="rounded-circle" src={modal.user.profile_image.large} alt={modal.user.first_name}/>
                <div className={classes.NameTime}>
                    <h2 className={classes.username}>{modal.user.username}</h2>
                    <Typography className={classes.time} variant="body2">{moment(modal.created_at).fromNow()} </Typography>
                </div>  
        </div>
        <div className={classes.rowItems}>
        { modal.user.twitter_username && (<div className={classes.row}>
             <TwitterIcon/> &nbsp; <Typography className={classes.time} variant="body2">{modal.user.twitter_username}</Typography> 
         </div>)}
         { modal.user.instagram_username && (<div className={classes.row}>
             <InstagramIcon/>  &nbsp; <Typography className={classes.time} variant="body2">{modal.user.instagram_username}</Typography>  
         </div>)}
        </div>
        </div>
        <div className={classes.root} style={{backgroundImage:`url(${modal.urls.full})`}}>
        <IconButton className={classes.likes} aria-label="add to favorites">
            <FavoriteIcon fontSize="medium"  /> &nbsp; <Typography className={classes.likeCounts} variant="body2">{modal.likes}</Typography> 
          </IconButton>
        </div>
        </Modal>
        </div>
    )
};

export default PopupModal;
