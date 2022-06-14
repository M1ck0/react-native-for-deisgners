import React from 'react';

import {
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import CloseIcon from '../../assets/close.svg';

import { projectState } from '../../recoil/atom/project-state';

const cardWidth = new Animated.Value(315);
const cardHeight = new Animated.Value(460);
const titleTop = new Animated.Value(20);
const opacity = new Animated.Value(0);
const textHeight = new Animated.Value(150);
const tabBarHeight = 30;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Project = ({ data, canOpen = false }) => {
  const setProjectState = useSetRecoilState(projectState);

  const openCard = () => {
    if (canOpen) {
      setProjectState(true);

      Animated.spring(cardWidth, {
        toValue: screenWidth - 30,
        useNativeDriver: false,
      }).start();
      Animated.spring(cardHeight, {
        toValue: screenHeight - tabBarHeight - 20,
        useNativeDriver: false,
      }).start();
      Animated.spring(titleTop, {
        toValue: 40,
        useNativeDriver: false,
      }).start();
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(textHeight, {
        toValue: 1000,
        useNativeDriver: false,
      }).start();
    }
  };

  const closeCard = () => {
    setProjectState(false);

    Animated.spring(cardWidth, {
      toValue: 315,
      useNativeDriver: false,
    }).start();
    Animated.spring(cardHeight, {
      toValue: 460,
      useNativeDriver: false,
    }).start();
    Animated.spring(titleTop, {
      toValue: 20,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(textHeight, {
      toValue: 150,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={openCard}>
      <AnimatedContainer style={{ width: cardWidth, height: cardHeight }}>
        <Cover>
          <Image source={data?.image} />
          <AnimatedTitle style={{ top: titleTop }}>{data?.title}</AnimatedTitle>
          <Author>by {data?.author}</Author>
        </Cover>
        <AnimatedText style={{ height: textHeight }}>{data?.text}</AnimatedText>
        <TouchableOpacity
          style={{ position: 'absolute', top: 40, right: 20 }}
          onPress={closeCard}>
          <AnimatedCloseView style={{ opacity }}>
            <CloseIcon width={24} height={24} />
          </AnimatedCloseView>
        </TouchableOpacity>
      </AnimatedContainer>
    </TouchableWithoutFeedback>
  );
};

export default Project;

const Container = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  background-color: #fff;
  elevation: 20;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 290px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  width: 300px;
`;

const AnimatedTitle = Animated.createAnimatedComponent(Title);

const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  opacity: 0.8;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Text = styled.Text`
  font-size: 17px;
  padding: 20px;
  line-height: 24px;
  color: #3c4560;
`;

const AnimatedText = Animated.createAnimatedComponent(Text);

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background-color: #fff;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView);
