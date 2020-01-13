import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../components/Input';
import Button from '../components/Button';
import Link from '../components/Link';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
      behavior="padding"
      enabled={true}
      keyboardVerticalOffset={100}>
      <ScrollView
        contentContainerStyle={{
          margin: 16,
        }}>
        <Input
          value={firstName}
          placeholder="Enter your first name"
          onChangeText={val => setFirstName(val)}
          returnKeyType="next"
        />
        <Input
          value={lastName}
          placeholder="Enter your last name"
          onChangeText={val => setLastName(val)}
          returnKeyType="next"
        />
        <Input
          value={username}
          placeholder="Enter your email"
          onChangeText={val => setUsername(val)}
          returnKeyType="next"
        />
        <Input
          value={mobilePhone}
          placeholder="Enter your mobile number"
          onChangeText={val => setMobilePhone(val)}
          keyboardType="phone-pad"
          returnKeyType="next"
        />
        <Input
          value={password}
          placeholder="Create a password"
          onChangeText={val => setPassword(val)}
          returnKeyType="done"
        />
        <Button
          label="Create Account"
          contentContainerStyle={{
            marginBottom: 16,
            marginTop: 20,
          }}
          onPress={() => {}}
        />
        <Link
          label="Already have an account?"
          onPress={() => {
            navigate('Login');
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignUp.navigationOptions = {};
export default SignUp;
