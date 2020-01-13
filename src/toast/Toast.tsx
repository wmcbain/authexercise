import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useToast } from './ToastProvider';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface ToastOptions {
  text?: string;
  type?: 'default' | 'error';
}

const MAX_HEIGHT = 120;
const DURATION = 3000;

const Toast = () => {
  const [displayedOptions, setDisplayedOptions] = useState<ToastOptions>(null);
  const { currentOptions, dismissToast } = useToast();
  const modalOffset = useRef(new Animated.Value(600)).current;

  useEffect(() => {
    setDisplayedOptions(currentOptions);
  }, [currentOptions]);

  useEffect(() => {
    if (!displayedOptions) {
      return;
    }

    Animated.spring(modalOffset, {
      toValue: 0,
      tension: 0,
    }).start();

    setTimeout(() => {
      Animated.timing(modalOffset, {
        toValue: MAX_HEIGHT,
        duration: 150,
      }).start(() => {
        setDisplayedOptions(null);
      });
    }, DURATION);
  }, [displayedOptions, modalOffset]);

  if (!displayedOptions) {
    return null;
  }

  let backgroundColor: string;
  switch (displayedOptions.type) {
    case 'error':
      backgroundColor = 'red';
      break;
    default:
      backgroundColor = 'lightseagreen';
      break;
  }

  return (
    <View
      pointerEvents={'none'}
      style={{
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        top: 0,
      }}>
      <SafeAreaView style={{ justifyContent: 'flex-end', flex: 1 }}>
        <Animated.View
          pointerEvents={'auto'}
          style={{
            backgroundColor: backgroundColor,
            maxHeight: MAX_HEIGHT,
            borderRadius: 3,
            marginHorizontal: 16,
            paddingHorizontal: 16,
            paddingTop: 8,
            paddingBottom: 8,
            transform: [{ translateY: modalOffset }],
          }}>
          <TouchableOpacity onPress={dismissToast}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                textAlign: 'center',
              }}>
              {currentOptions.text}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

export default Toast;
