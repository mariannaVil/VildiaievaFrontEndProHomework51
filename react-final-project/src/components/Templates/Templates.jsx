import { Grid } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import MainPage from '../../pages/MainPage/MainPage';

const Templates = () => (
  <Grid container>
  <Grid item xs={12}>
    <Header />
  </Grid>
  <Grid item xs={3}>
    <Sidebar />
  </Grid>
  <Grid item xs={9}>
    <MainPage />
  </Grid>
  <Grid item xs={12}>
    <Footer />
  </Grid>
</Grid>
);
export default Templates;
