import React from 'react'
import {Grid} from '@material-ui/core'
import Post from './Post/Post'
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles'

const Posts = ({posts,HandleImageClick}) => {
    const classes=useStyles();
    return (
        !posts.length ? (
            <div style={{display:'flex',justifyContent: 'center',margin:'50px'}}>
            
                <CircularProgress  />
            </div>
            ) :  ( 
            <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid  container justify='center' spacing={4}>
            {posts.map((post)=>(
                <Grid key={post.user.id} xs={12} sm={6} md={4} lg={3} item>
                    <Post HandleImageClick={HandleImageClick} post={post} />
                </Grid>
            ))}
        </Grid>
        </main>
        )
    )
}

export default Posts
