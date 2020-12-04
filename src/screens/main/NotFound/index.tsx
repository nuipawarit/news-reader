import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Body, Document, Head } from 'components/common/base/Page';
import ROUTER from 'config/app/router';

const Box = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  .icon {
    color: #9b9b9b;
    font-size: 72px;
    margin-bottom: 32px;
  }

  .error-code {
    color: #79b6ff;
    font-size: 72px;
  }

  p {
    margin-bottom: 32px;
  }
`;

const NotFound: FC = () => {
  return (
    <Document>
      <Head title="Page Not Found" />
      <Body>
        <Box>
          <h1 className="error-code">404</h1>
          <h6 className="text-grey-2">Page not found</h6>
          <p className="text-grey-2 text-center">
            Sorry, we couldn&apos;t find the page you were looking for.
          </p>
          <Link
            className="overline text-dark text-decoration-none text-uppercase"
            href="/"
            to={ROUTER.routes.default.path}
          >
            Back To Main Page
          </Link>
        </Box>
      </Body>
    </Document>
  );
};

export default NotFound;
