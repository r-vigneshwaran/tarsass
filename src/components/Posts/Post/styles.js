import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      position: 'relative',
      maxWidth: 345,
      height:500,
      justifyContent:'flex-end',
      '&:hover': {
        "& $text": {
            opacity:1
        }
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: 'red[500]',
    },
    head:{
      marginLeft:5,
      paddingTop:10,
      display: 'flex',
      flexDirection:'row',
      paddingLeft:10,
    },
    username:{
      color:'white',
      marginBottom:0,
      fontSize:24
    },
    likes:{
      color:'red',
      position:'absolute',                  
      bottom:0,                         
      left:0, 
    },
    text:{
      opacity:0,
    },
    likeCounts:{
      color:'white',
      fontSize:16
    },
    time:{
      color:'white',
      marginTop:0
    },
    NameTime:{
      marginTop:0,
      marginLeft:10,
    },
   
  }));