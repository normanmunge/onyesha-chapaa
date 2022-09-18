import { useState } from 'react';
import { StyleSheet, View, Alert, Pressable, Text } from 'react-native';
import AuthForm from '../forms/auth';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface authContentProps {
  isLogin?: boolean;
  onAuthenticate?: any;
}
const AuthContent: React.FC<authContentProps> = ({
  isLogin,
  onAuthenticate,
}) => {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const submitHandler = (credentials: any) => {
    let { email, confirmEmail, password, confirmPassword } = credentials;
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  };

  const switchAuthModeHandler = () => {
    if(isLogin) {
      navigation.reset({
        index: 0,
        routes: [{
          name: 'Signup'
        }]
      })
    } else {
      navigation.reset({
        index: 0,
        routes: [{
          name: 'Login'
        }]
      })
    }
  }
  return (
    <View>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View>
        <Pressable onPress={switchAuthModeHandler}>
          <Text>
            {isLogin ? 'Create a new user' : 'Already have an account?'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({});
