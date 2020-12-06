import React, { FC } from 'react';

import styled from 'styled-components';

const Box = styled.div`
  background-color: #e0e0e0;
  flex-grow: 1;
  overflow-y: auto;
`;

const Body: FC = ({ children }) => <Box id="body">{children}</Box>;

export default Body;
