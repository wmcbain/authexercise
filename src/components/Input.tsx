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
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const Input = (props: Props) => {
  const {
    value,
    placeholder,
    onChangeText,
    keyboardType,
    returnKeyType,
    autoCapitalize,
  } = props;

  return (
    <View
      style={{
        marginBottom: 12,
        borderBottomColor: 'darkgray',
        borderBottomWidth: 1,
      }}>
      <TextInput
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        autoCapitalize={autoCapitalize}
        style={{
          fontSize: 18,
          paddingVertical: 12,
        }}
        onChangeText={val => {
          onChangeText(val);
        }}
      />
    </View>
  );
};

export default Input;
