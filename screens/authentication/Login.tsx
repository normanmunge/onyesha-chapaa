import { View, TextInput, Text } from 'react-native';
import PrimaryButton from '../../components/ui/buttons/primary-button';

function LoginScreen() {
  return (
    <View>
      <TextInput /> {/* TODO: Create custom form input: email/phone */}
      <TextInput /> {/* TODO: Create custom form input: password */}
      <PrimaryButton>LOGIN</PrimaryButton>
      <Text /> {/* create new account */}
      <Text /> {/* forgot password */}
    </View>
  );
}

export default LoginScreen;
