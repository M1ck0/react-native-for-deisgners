import React, { useEffect } from 'react';

import {
  ScrollView,
  TouchableOpacity,
  View,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import Menu from '../../components/menu';
import Logo from '../../components/logo';
import Card from '../../components/card';
import Course from '../../components/course';

import { menuState } from '../../recoil/atom/menu-state';

import NotificationIcon from '../../assets/icon-notifications.svg';

const scale = new Animated.Value(1);
const opacity = new Animated.Value(1);

const HomeScreen = ({ navigation }) => {
  const [menu, setMenu] = useRecoilState(menuState);

  const openMenu = () => {
    setMenu(true);
  };

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  useEffect(() => {
    if (menu === false) {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        StatusBar.setBackgroundColor('#f0f3f5');
      }, 270);
      StatusBar.setBarStyle('dark-content', true);
    }

    if (menu === true) {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(opacity, {
        toValue: 0.7,
        useNativeDriver: false,
      }).start();

      StatusBar.setBackgroundColor('#000');
      StatusBar.setBarStyle('light-content', true);
    }
  }, [menu]);

  return (
    <RootView>
      <Menu />
      <AnimatedContainer
        style={{
          transform: [{ scale: scale }],
          opacity: opacity,
          borderRadius: menu === false ? 0 : 10,
        }}>
        <ScrollView style={{ flex: 1 }}>
          <TitleBar>
            <TouchableOpacity onPress={openMenu}>
              <Avatar source={require('../../assets/avatar.jpg')} />
            </TouchableOpacity>
            <View>
              <Title>Welcome back, </Title>
              <Name>Meng</Name>
            </View>
            <NotificationIcon
              width={30}
              height={30}
              style={{ position: 'absolute', right: 20, top: 10 }}
            />
          </TitleBar>
          <ScrollView
            horizontal
            contentContainerStyle={{
              paddingBottom: 20,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 30,
            }}
            showsHorizontalScrollIndicator={false}>
            {logos?.map(item => (
              <Logo key={item.text} data={item} />
            ))}
          </ScrollView>
          <Subtitle>Continue Learnings</Subtitle>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ paddingBottom: 30, paddingRight: 20 }}
            showsHorizontalScrollIndicator={false}
            bounces={true}>
            {cards?.map(item => (
              <Card key={item.title} data={item} navigation={navigation} />
            ))}
          </ScrollView>
          <Subtitle>Popular courses</Subtitle>
          {courses?.map(item => (
            <Course key={item.title} data={item} />
          ))}
        </ScrollView>
      </AnimatedContainer>
    </RootView>
  );
};

export default HomeScreen;

const RootView = styled.View`
  background: #000;
  flex: 1;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  margin-right: 15px;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
  flex-direction: row;
`;

const logos = [
  {
    image: require('../../assets/logo-framerx.png'),
    text: 'Framer X',
  },
  {
    image: require('../../assets/logo-react.png'),
    text: 'React Native',
  },
  {
    image: require('../../assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('../../assets/logo-react.png'),
    text: 'React',
  },
];

const cards = [
  {
    title: 'React Native for Designers',
    subtitle: 'React Native',
    image: require('../../assets/background11.jpg'),
    logo: require('../../assets/logo-react.png'),
    caption: '1 of 12 sections',
  },
  {
    title: 'Composer',
    image: require('../../assets/background12.jpg'),
    subtitle: 'React Native',
    logo: require('../../assets/logo-react.png'),
    caption: '5 of 10 sections',
  },
  {
    title: 'React for Designers',
    subtitle: 'React Native',
    image: require('../../assets/background13.jpg'),
    logo: require('../../assets/logo-react.png'),
    caption: '1 of 12 sections',
  },
  {
    title: 'Swift UI for Designers',
    image: require('../../assets/background14.jpg'),
    subtitle: 'React Native',
    logo: require('../../assets/logo-react.png'),
    caption: '5 of 10 sections',
  },
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../../assets/background1.jpg'),
    logo: require('../../assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('../../assets/avatar-default.jpg'),
    caption: 'Design and interactive prototype',
  },
  {
    title: 'Prototype in Figma',
    subtitle: '10 sections',
    image: require('../../assets/background4.jpg'),
    logo: require('../../assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('../../assets/avatar-default.jpg'),
    caption: 'Design and interactive prototype',
  },
  {
    title: 'Framer X',
    subtitle: '10 sections',
    image: require('../../assets/background3.jpg'),
    logo: require('../../assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('../../assets/avatar-default.jpg'),
    caption: 'Design and interactive prototype',
  },
];
