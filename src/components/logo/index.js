import React from 'react';

import styled from 'styled-components';

const Logo = ({ data }) => {
  return (
    <Container>
      <Image source={data?.image} resizeMode="contain" />
      <Text>{data?.text}</Text>
    </Container>
  );
};

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: #fff;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  elevation: 20;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  align-items: center;
  margin: 0 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
