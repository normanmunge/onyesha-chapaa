import { View, TextInput, Text } from 'react-native';
import Button from '../components/buttons/button';

function LoginScreen() {
  return (
    <View>
      <TextInput /> {/* TODO: Create custom form input: email/phone */}
      <TextInput /> {/* TODO: Create custom form input: password */}
      <Button>LOGIN</Button>
      <Text /> {/* create new account */}
      <Text /> {/* forgot password */}
    </View>
  );
}

export default LoginScreen;
