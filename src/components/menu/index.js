import React, { useEffect, memo, useRef } from 'react';

import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import MenuItem from '../menu-item';

import CloseIcon from '../../assets/close.svg';
import SettingsIcon from '../../assets/settings.svg';
import BillingIcon from '../../assets/card.svg';

import { menuState } from '../../recoil/atom/menu-state';

const screenHeight = parseInt(Dimensions.get('window').height + 20, 10);

const top = new Animated.Value(screenHeight);

const Menu = () => {
  const [menu, setMenu] = useRecoilState(menuState);

  useEffect(() => {
    if (menu === true) {
      Animated.spring(top, {
        toValue: 60,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(top, {
        toValue: screenHeight,
        useNativeDriver: false,
      }).start();
    }
  }, [menu]);

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <AnimatedContainer style={{ top: top }}>
      <Cover>
        <Image source={require('../../assets/background2.jpg')} />
        <Title>Meng to</Title>
        <Subtitle>Designer at Design+Code</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={closeMenu}
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          marginLeft: -22,
          zIndex: 1,
        }}>
        <CloseView>
          <CloseIcon width={24} height={24} />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {items?.map(item => (
          <MenuItem data={item} key={item?.title} />
        ))}
      </Content>
    </AnimatedContainer>
  );
};

export default memo(Menu);

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  background: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  elevation: 30;
`;

const Container = styled.View`
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 145px;
  background: #000;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icon: <SettingsIcon width={24} height={24} />,
    title: 'Account',
    text: 'Settings',
  },
  {
    icon: <BillingIcon width={24} height={24} />,
    title: 'Billing',
    text: 'Payments',
  },
];
