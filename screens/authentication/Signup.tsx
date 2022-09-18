import { useState } from 'react';
import { View, Text } from 'react-native';
import AuthContent from '../../components/auth/AuthContent';
import { createUser } from '../../services/auth';

const SingupScreen = () => {

  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

async function singupHandler({ email, password }: { email: string, password: string }) {
  setIsAuthenticating(true);
  await createUser(email, password);
  setIsAuthenticating(false);
}
  
  if (isAuthenticating) {
    //TODO: //ADD A ALOADING INDICATOR
  return <Text>Crating user ...</Text>
  }

  return (
    <AuthContent onAuthenticate={singupHandler} />
  );
};

export default SingupScreen;
