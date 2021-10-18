import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";

const Posts = ({ setCurrentId }) => {
  const { posts } = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts?.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item lg={3} xs={12} md={2} sm={12}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
