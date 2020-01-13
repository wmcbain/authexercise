import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
}

const Link = (props: Props) => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          fontWeight: '600',
          textAlign: 'center',
          padding: 8,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
