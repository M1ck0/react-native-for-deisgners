import React from 'react';

import styled from 'styled-components';

const Course = ({ data }) => {
  return (
    <Container>
      <Cover>
        <Image source={data?.image} />
        <Logo source={data?.logo} resizeMode="contain" />
        <Subtitle>{data?.subtitle}</Subtitle>
        <Title>{data?.title}</Title>
      </Cover>
      <Content>
        <Avatar source={data?.avatar} />
        <Caption>{data?.caption}</Caption>
        <Author>Taught by {data?.author}</Author>
      </Content>
    </Container>
  );
};

export default Course;

const Container = styled.View`
  height: 335px;
  background: #fff;
  margin: 10px 20px;
  border-radius: 14px;
  elevation: 20;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
`;

const Cover = styled.View`
  height: 260px;
  width: 100%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  margin-left: 20px;
`;

const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
`;

const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;
