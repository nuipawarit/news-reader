import React, { FC } from 'react';

import { Box, Container, Hidden } from '@material-ui/core';

import { Body, Document, Head } from 'components/common/base/Page';
import { NewsContextProvider } from 'state/news/provider';

import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadMoreButton from './components/LoadMoreButton';

const Feed: FC = () => {
  return (
    <Document>
      <Head title="Feed" />
      <Body>
        <NewsContextProvider>
          <Container disableGutters maxWidth="lg">
            <Box m={{ sm: '20px' }}>
              <Header />
            </Box>
            <Box m={{ sm: '20px' }}>
              <CardContainer />
            </Box>
            <Box my={{ xs: '10px' }} mx={{ xs: '5px' }} m={{ sm: '20px' }}>
              <LoadMoreButton />
            </Box>
            <Hidden xsDown>
              <Box mt={{ sm: '75px' }}>
                <Footer />
              </Box>
            </Hidden>
          </Container>
        </NewsContextProvider>
      </Body>
    </Document>
  );
};

export default Feed;
