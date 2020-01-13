import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';

interface Props {
  value: string;
  placeholder: string;
  onChangeText: (val: string) => void;
  errorMessage?: string;
  isValid?: (val: string) => boolean;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
}

const Input = (props: Props) => {
  const [hasError, setHasError] = useState(false);
  const {
    value,
    placeholder,
    onChangeText,
    errorMessage,
    isValid,
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
          if (hasError) {
            setHasError(false);
          }
          onChangeText(val);
        }}
        onBlur={() => {
          if (!errorMessage || !isValid) {
            return;
          }
          if (isValid(value)) {
            return;
          }
          setHasError(true);
        }}
      />
      {hasError ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

export default Input;
