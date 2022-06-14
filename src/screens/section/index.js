import React, { useEffect } from 'react';

import { StatusBar } from 'react-native';
import styled from 'styled-components';

import CloseButton from '../../assets/close.svg';

const SectionScreen = ({ route, navigation }) => {
  const section = route.params.section;

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Cover>
        <Image source={section.image} />
        <Wrapper>
          <Logo source={section.logo} />
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>
        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
      <CloseView onPress={onClose}>
        <CloseButton width={30} height={30} />
      </CloseView>
    </Container>
  );
};

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: #fff;
  font-size: 17px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 300px;
`;

const CloseView = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #fff;
  border-radius: 20px;
  padding: 2px;
  elevation: 5;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  color: #fff;
  opacity: 0.8;
  font-size: 15px;
  margin-left: 5px;
  font-weight: 600;
  text-transform: uppercase;
`;
