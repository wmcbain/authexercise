import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../components/Input';
import Button from '../components/Button';
import Link from '../components/Link';
import { emailLogin } from '../api/user';
import { useToast } from '../toast/ToastProvider';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
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
          value={username}
          placeholder="Enter your email"
          onChangeText={val => setUsername(val)}
          returnKeyType="next"
          autoCapitalize="none"
        />
        <Input
          value={password}
          placeholder="Create a password"
          onChangeText={val => setPassword(val)}
          returnKeyType="done"
        />
        <Button
          label="Login"
          /* These are arbitrary, in a real world app I would add validators */
          disabled={loading || username.length < 5 || password.length < 8}
          contentContainerStyle={{
            marginBottom: 16,
            marginTop: 20,
          }}
          onPress={async () => {
            setLoading(true);
            const data = await emailLogin(username, password);
            switch (data.status) {
              case 200:
                showToast({
                  text: 'Login successful!',
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
          label="Create an account"
          onPress={() => {
            navigate('SignUp');
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignUp.navigationOptions = {};
export default SignUp;
