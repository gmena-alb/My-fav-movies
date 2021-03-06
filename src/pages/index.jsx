import React from 'react';
import Layout from '../layout/Layout';
import Header from '../components/Header';
import Seo from '../components/Seo';
import AllCards from '../components/AllCards';

const Home = () => {
  return (
    <Layout>
      <Seo title="home" />
      <Header />
      <AllCards />
    </Layout>
  );
};

export default Home;
