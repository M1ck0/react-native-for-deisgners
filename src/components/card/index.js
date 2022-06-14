import React from 'react';

import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const Card = ({ data, navigation }) => {
  return (
    <Container onPress={() => navigation.push('Sections', { section: data })}>
      <Cover>
        <Image source={data?.image} />
        <Title>{data?.title}</Title>
      </Cover>
      <Content>
        <Logo source={data?.logo} />
        <Wrapper>
          <Caption>{data?.caption}</Caption>
          <Subtitle>{data?.subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Card;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Container = styled.TouchableOpacity`
  background-color: #fff;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  elevation: 15;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
