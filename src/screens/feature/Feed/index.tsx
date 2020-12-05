import React, { FC } from 'react';

import { Box, Container } from '@material-ui/core';

import { Body, Document, Head } from 'components/common/base/Page';

import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import LoadMoreButton from './components/LoadMoreButton';

type Props = {};

const Feed: FC<Props> = () => {
  return (
    <Document>
      <Head title="Feed" />
      <Body>
        <Container disableGutters fixed>
          <Box mb={{ md: '50px' }}>
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
