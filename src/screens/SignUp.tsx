import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../components/Input';
import Button from '../components/Button';
import Link from '../components/Link';
import { createUser } from '../api/user';
import { useToast } from '../toast/ToastProvider';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [password, setPassword] = useState('');

  const { navigate } = useNavigation();
  const { showToast } = useToast();

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
          autoCapitalize="none"
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
          /* These are arbitrary, in a real world app I would add validators */
          disabled={
            loading ||
            firstName.length < 2 ||
            lastName.length < 3 ||
            username.length < 5 ||
            mobilePhone.length !== 10 ||
            password.length < 8
          }
          contentContainerStyle={{
            marginBottom: 16,
            marginTop: 20,
          }}
          onPress={async () => {
            setLoading(true);
            const data = await createUser({
              firstName,
              lastName,
              username,
              mobilePhone,
              password,
            });
            switch (data.status) {
              case 200:
                showToast({
                  text: 'Account created successfully!',
                });
                setTimeout(() => {
                  navigate('Dashboard');
                  setLoading(false);
                }, 1000);
                return;
              case 400:
                const error = await data.text();
                showToast({
                  text: error,
                  type: 'error',
                });
                return;
              default:
                return;
            }
          }}
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
