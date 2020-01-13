import React from 'react';
import {
  View,
  TextInput,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';

interface Props {
  value: string;
  placeholder: string;
  onChangeText: (val: string) => void;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
}

const Input = (props: Props) => {
  const {
    value,
    placeholder,
    onChangeText,
    keyboardType,
    returnKeyType,
  } = props;

  return (
    <View
      style={{
        marginBottom: 12,
      }}>
      <TextInput
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        style={{
          fontSize: 18,
          padding: 12,
        }}
        onChangeText={val => {
          onChangeText(val);
        }}
      />
    </View>
  );
};

export default Input;
