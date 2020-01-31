import React, {useState, useEffect} from 'react';
import {Paper, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2)
  },
}));

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const classes = useStyles();

  const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const postItems = posts.map((post) => (
    <Grid item xs={4} key={post.id}>
      <Paper className={classes.paper} >
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </Paper>
    </Grid>
  ));

  return (
    <div>
      <Grid container spacing={3}>
      {postItems}
      </Grid>
    </div>
  );
};

export default Posts;
