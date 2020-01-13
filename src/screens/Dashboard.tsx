import React from 'react';
import { View, Text } from 'react-native';

const Dashboard = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 24,
        }}>
        Dashboard
      </Text>
    </View>
  );
};

export default Dashboard;
