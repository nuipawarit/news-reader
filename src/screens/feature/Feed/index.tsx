import React, { FC } from 'react';

import { Box, Container } from '@material-ui/core';

import { Body, Document, Head } from 'components/common/base/Page';

import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadMoreButton from './components/LoadMoreButton';

const Feed: FC = () => {
  return (
    <Document>
      <Head title="Feed" />
      <Body>
        <Container disableGutters maxWidth="lg">
          <Box m={{ sm: '20px' }} mb={{ sm: '50px' }}>
            <Header />
          </Box>
          <CardContainer />
          <LoadMoreButton />
          <Footer />
        </Container>
      </Body>
    </Document>
  );
};

export default Feed;
