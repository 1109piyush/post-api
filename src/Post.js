import { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography } from '@mui/material';

function Post() {
  const [posts, setPosts] = useState([]);

  // Fetch posts on component mount
  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
      .then(response => setPosts(response.data.posts))
      .catch(error => console.log(error));
  }, []);

  return (
    // create a grid container with 2px spacing between each item and center it
    <Grid container spacing={2} justifyContent="center">
      {/* create a grid item that takes up 12 columns on extra-small screens and 8 columns on medium screens */}
      <Grid item xs={12} md={8}>
        {/* create a heading */}
        <Typography variant="h4" component="h1" gutterBottom>
          Posts
        </Typography>
        {/* create a grid container with 2px spacing between each item */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {/* map over the posts array and create a grid item for each post */}
          {posts.map(post => (
            // create a grid item that takes up 12 columns on extra-small screens and 6 columns on medium screens
            <Grid item xs={12} md={6} key={post.id}>
              {/* create a paper component with a box-shadow of 3 and some padding and border radius */}
              <Paper elevation={3} sx={{ p: 2, borderRadius: '10px', height: '90%' }}>
                {/* create a heading for the post title with some margin-bottom */}
                <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
                  {post.title}
                </Typography>
                {/* create a paragraph for the post body with some margin-bottom */}
                <Typography variant="body1" component="p" sx={{ mb: 2 }}>
                  {post.body}
                </Typography>
                {/* create a caption for the post tags */}
                <Typography variant="caption" component="div">
                  {post.tags.join(', ')}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Post;