
import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    head:{
        marginLeft:5,
        paddingTop:10,
        display: 'flex',
        flexDirection:'row',
        paddingLeft:10,
        width:'300px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:80,

        [theme.breakpoints.down('md')]:{
          flexDirection:'column',
          // justifyContent:'center',
          alignContent:'center',
          width:'fit-content',
          marginLeft:0,
        }
      },
      root:{
          marginTop:100
      },
      profile:{
        flexDirection:'row'
      },
      username:{
        color:'black',
        marginBottom:0, 
        fontSize:24
      },
      time:{
        color:'time',
        marginTop:0
      },
      NameTime:{
        marginTop:0,
        marginLeft:10,
        
      },
      content : {
        top         : '50%',
        left        : '50%',
        right       : 'auto',
        bottom      : 'auto',
        marginRight : '-50%',
        transform   : 'translate(-50%, -50%)'
      },
      media:{
          height:'100%',
          width:'100%',
          marginTop:'0',
          marginBottom:20,
      },
      root:{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        maxWidth: 500,
        height:'100%',
        marginTop:'0px',
        marginLeft:'auto',
        marginRight:'auto',
        [theme.breakpoints.down('md')]:{
          height:600,
        }
      },
      close:{
          float:'right',
          "&:hover":{
            color:'red'
          }
      },
      likes:{
        color:'red',
        position:'absolute',                  
        bottom:0,                         
        left:0, 
        
      },
      likeCounts:{
        color:'white',
        fontSize:16
      },
      row:{
        display:'flex',
        flexDirection:'row',
        marginLeft:0,
        alignItems:'center',
        // justifyContent:'center'
      },
      heading:{
        display:'flex',
        flexDirection:'row',
        marginLeft:0,
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
          marginLeft:0,
          justifyContent:'flex-start'
        }
      },
      rowItems:{
        display:'flex',
        flexDirection:'row',
        marginLeft:10,
      }
     
}))