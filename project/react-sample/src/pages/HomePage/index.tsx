import React, { FC } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Home: FC = () => {
  return <Container>안녕 난 react monorepo의 샘플 앱이야</Container>;
};

export default Home;
