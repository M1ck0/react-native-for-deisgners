import React, { useEffect, useState } from 'react';

import { PanResponder, Animated } from 'react-native';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import Project from '../../components/project';

import { projectState } from '../../recoil/atom/project-state';

const pan = new Animated.ValueXY();
const scale = new Animated.Value(0.9);
const translateY = new Animated.Value(44);
const thirdScale = new Animated.Value(0.8);
const thirdTranslateY = new Animated.Value(20);
const opacity = new Animated.Value(0);

const getNextIndex = index => {
  const nextIndex = index + 1;
  if (nextIndex > projects?.length - 1) {
    return 0;
  }

  return index + 1;
};

const ProjectsScreen = () => {
  const [index, setIndex] = useState(0);

  const isOpen = useRecoilValue(projectState);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (event, gestureState) => {
      if (gestureState.dx === 0 && gestureState.dy === 0) {
        return false;
      } else {
        if (!isOpen) {
          return true;
        }
      }
    },
    onPanResponderGrant: () => {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
      }).start();

      Animated.spring(thirdScale, {
        toValue: 0.9,
        useNativeDriver: true,
      }).start();
      Animated.spring(thirdTranslateY, {
        toValue: 44,
        useNativeDriver: true,
      }).start();

      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      const positionY = pan.y.__getValue();
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      if (positionY > 200) {
        Animated.timing(pan, {
          toValue: { x: 0, y: 1000 },
          useNativeDriver: true,
        }).start(() => {
          pan.setValue({ x: 0, y: 0 });
          scale.setValue(0.9);
          translateY.setValue(44);
          thirdScale.setValue(0.8);
          thirdTranslateY.setValue(20);
          setIndex(prevState => getNextIndex(prevState));
        });
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
        Animated.spring(scale, {
          toValue: 0.9,
          useNativeDriver: true,
        }).start();
        Animated.spring(translateY, {
          toValue: 44,
          useNativeDriver: true,
        }).start();

        Animated.spring(thirdScale, {
          toValue: 0.8,
          useNativeDriver: true,
        }).start();
        Animated.spring(thirdTranslateY, {
          toValue: 20,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <Container>
      <AnimatedMask style={{ opacity: opacity }} />
      <Animated.View
        style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}
        {...panResponder.panHandlers}>
        <Project
          data={projects[index]}
          key={projects[index]?.title}
          canOpen={true}
        />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ scale: scale }, { translateY: translateY }],
        }}>
        <Project
          data={projects[getNextIndex(index)]}
          key={projects[getNextIndex(index)].title}
        />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -2,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          transform: [{ scale: thirdScale }, { translateY: thirdTranslateY }],
        }}>
        <Project
          data={projects[getNextIndex(index)]}
          key={projects[getNextIndex(index)].title}
        />
      </Animated.View>
    </Container>
  );
};

export default ProjectsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f3f5;
`;

const Mask = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: -3;
`;

const AnimatedMask = Animated.createAnimatedComponent(Mask);

const projects = [
  {
    title: 'Price Tag 1',
    image: require('../../assets/background5.jpg'),
    author: 'Liu Yi',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem.',
  },
  {
    title: 'Price Tag 2',
    image: require('../../assets/background6.jpg'),
    author: 'Liu Yi',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem.',
  },
  {
    title: 'Price Tag 3',
    image: require('../../assets/background7.jpg'),
    author: 'Liu Yi',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloremque error expedita in minus odit quaerat repudiandae rerum temporibus voluptatem.',
  },
];
