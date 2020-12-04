import React, { FC } from 'react';

import Body from 'components/core/document/Body';
import Wrapper from 'components/core/layout/Wrapper';
import Routes from 'components/core/navigation/Routes';
import Providers from 'components/core/skeleton/Providers';

const App: FC = () => (
  <Providers>
    <Wrapper>
      <Body>
        <Routes />
      </Body>
    </Wrapper>
  </Providers>
);

export default App;
