import React from 'react';

import styled from 'styled-components';

const MenuItem = ({ data }) => {
  return (
    <Container>
      <IconView>{data?.icon}</IconView>
      <Content>
        <Title>{data?.title}</Title>
        <Text>{data?.text}</Text>
      </Content>
    </Container>
  );
};

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

const IconView = styled.View`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  padding-left: 20px;
`;

const Title = styled.Text`
  color: #3c4560;
  font-size: 24px;
  font-weight: 600;
`;

const Text = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.5;
  margin-top: 5px;
`;
