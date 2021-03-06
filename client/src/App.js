import React from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core';
import memories from './images/memories.png';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const classes = useStyles;
  return (
    <>
      <Container maxwidth='lg'>
        <AppBar position='static' color='inherit' className={classes.appBar}>
          <Typography className={classes.heading} variant='h2' align='center'>
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt='memories'
            heigt='60'
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify='space-between' align='stetch' spacing={3}>
              <Grid xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;
