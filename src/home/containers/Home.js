import React, { Component } from 'react';
import { Grid } from '@mui/material';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import SpotLight from '../components/Spotlight';
import Commitment from '../components/Commitment';
import NewsLetter from '../components/NewsLetter'
import Testimonial from '../components/Testimonial';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header />
        {/* <Navigation />
        <div className='spotlight-commitment'>
          <Grid container spacing={2} >
            <Grid item md={6} lg={6} sm={12} xs={12}>
              <SpotLight />
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12}>
              <Commitment />
            </Grid>
          </Grid>
        </div>
        <div className='newsletter-section'>
          <Grid container >
            <Grid item md={12} xs={12} sm={12} lg={12} >
              <NewsLetter />
            </Grid>
          </Grid>
        </div>
        <div className='newsletter-section'>
          <Grid container >
            <Grid item md={12} xs={12} sm={12} lg={12} >
              <Testimonial />
            </Grid>
          </Grid>
        </div> */}
  

      </div>
    );
  }
}

export default Home;