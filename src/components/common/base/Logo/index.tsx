import React, { FC } from 'react';

import styled from 'styled-components';


const Img = styled('img')`
  width: auto;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Logo: FC = () => {
  return <Img alt="logo" src="https://via.placeholder.com/120" />;
};

export default Logo;
