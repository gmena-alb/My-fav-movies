import React from 'react';
import styled from 'styled-components';
import Layout from '../layout/Layout';
import image from '../assets/23.svg';

const NotFound404 = () => {
  return (
    <Layout>
      <NotFound>
        <h1>Oops... nothing here</h1>
        <img src={image} alt="cat knocking a vase" />
      </NotFound>
    </Layout>
  );
};

const NotFound = styled.section`
  display: grid;
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    margin-inline: auto;
  }
  img {
    width: 50%;
    margin-inline: auto;
  }
`;

export default NotFound404;
