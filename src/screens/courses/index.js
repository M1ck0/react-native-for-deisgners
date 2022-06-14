import React from 'react';

import styled from 'styled-components';
import { Button } from 'react-native';

const CoursesScreen = ({ navigation }) => {
  return (
    <Container>
      <Text>Courses screen</Text>
      <Button title="Close" onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default CoursesScreen;

const Container = styled.View``;

const Text = styled.Text``;
