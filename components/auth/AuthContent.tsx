import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AuthForm from '../forms/auth';

interface authContentProps {
  isLogin?: boolean;
  onAuthenticate?: any;
}
const AuthContent: React.FC<authContentProps> = ({
  isLogin,
  onAuthenticate,
}) => {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const submitHandler = (credentials: any) => {
    let { email, confirmEmail, password, confirmPassword } = credentials;
    console.log('THE CREDENTIALS', credentials);
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

  return (
    <View>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({});
