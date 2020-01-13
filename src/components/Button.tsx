import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
  contentContainerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const Button = (props: Props) => {
  const { label, onPress, contentContainerStyle, disabled = false } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        {
          backgroundColor: disabled ? 'gray' : 'dodgerblue',
          borderRadius: 5,
        },
        contentContainerStyle,
      ]}
      onPress={onPress}>
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
          textAlign: 'center',
          padding: 12,
          textTransform: 'uppercase',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
