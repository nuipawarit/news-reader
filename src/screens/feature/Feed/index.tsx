import React, { FC } from 'react';

import { Box, Container, Hidden } from '@material-ui/core';

import { Body, Document, Head } from 'components/common/base/Page';
import MOCKS from 'mocks';

import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadMoreButton from './components/LoadMoreButton';

const Feed: FC = () => {
  const { news } = MOCKS.data;

  return (
    <Document>
      <Head title="Feed" />
      <Body>
        <Container disableGutters maxWidth="lg">
          <Box m={{ sm: '20px' }}>
            <Header />
          </Box>
          <Box m={{ sm: '20px' }}>
            <CardContainer data={news} />
          </Box>
          <Box m={{ sm: '20px' }} my={{ xs: '10px' }} mx={{ xs: '5px' }}>
            <LoadMoreButton />
          </Box>
          <Hidden xsDown>
            <Box mt={{ sm: '75px' }}>
              <Footer />
            </Box>
          </Hidden>
        </Container>
      </Body>
    </Document>
  );
};

export default Feed;
