import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import PrimaryButton from '../ui/buttons/primary-button';
import Input from '../ui/input';

interface authFormProps {
  isLogin?: boolean;
  onSubmit?: any;
  credentialsInvalid?: any;
  submitLabelProp?: string;
}
const AuthForm: React.FC<authFormProps> = ({
  isLogin,
  onSubmit,
  submitLabelProp,
  credentialsInvalid,
}) => {
  //   const [enteredEmail, setEnteredEmail] = useState('');
  //   const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  //   const [enteredPassword, setEnteredPassword] = useState('');
  //     const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const [inputs, setInputs] = useState<any>({
    enteredEmail: {
      value: '',
      isValid: true,
    },
    enteredConfirmEmail: {
      value: '',
      isValid: true,
    },
    enteredPassword: {
      value: '',
      isValid: true,
    },
    enteredConfirmPassword: {
      value: '',
      isValid: true,
    },
  });

  const {
    email: emailinvalid,
    confirmEmail: emailsDontMatch,
    password: passwordinvalid,
    confirmPassword: passwordDontMatch,
  } = credentialsInvalid;

  //   const updateInputValueHandler = (type: string, value: string) => {
  //     switch (type) {
  //       case 'email':
  //         setEnteredEmail(value);
  //         break;
  //       case 'confirmEmail':
  //         setEnteredEmail(value);
  //         break;
  //       case 'password':
  //         setEnteredEmail(value);
  //         break;
  //       case 'confirmPassword':
  //         setEnteredEmail(value);
  //         break;

  //       default:
  //         break;
  //     }
  //   };

  const updateInputValueHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputs((currInputs: any) => {
      return {
        ...currInputs,
        [inputIdentifier]: {
          value: enteredValue,
          isValid: enteredValue.trim().length > 0,
        },
      };
    });
  };

  const submitHandler = () => {
    onSubmit({
      email: inputs.email.value,
      confirmEmail: inputs.enteredConfirmEmail.value,
      password: inputs.password.value,
      confirmPassword: inputs.enteredConfirmPassword.value,
    });
  };

  let userStatusLabel = isLogin ? 'Log In' : 'Sign Up';

  return (
    <View>
      <Input
        label='Email Address'
        inputConfig={{
          keyboadType: 'email-address',
          onChangeText: updateInputValueHandler.bind(this, 'email'), //binding enables executing a function at a future time
          //value: inputs.enteredEmail.value,
        }}
        invalid={emailinvalid}
      />
      {!isLogin && (
        <Input
          label='Confirm Email Address'
          inputConfig={{
            keyboadType: 'email-address',
            onChangeText: updateInputValueHandler.bind(this, 'confirmEmail'), //binding enables executing a function at a future time
            // value: inputs.enteredConfirmEmail.value,
          }}
          invalid={emailsDontMatch}
        />
      )}
      <Input
        label='Password'
        inputConfig={{
          keyboadType: 'secure',
          onChangeText: updateInputValueHandler.bind(this, 'password'), //binding enables executing a function at a future time
          // value: inputs.enteredPassword.value,
        }}
        invalid={emailinvalid}
      />
      {!isLogin && (
        <Input
          label='Confirm Password'
          inputConfig={{
            keyboadType: 'secure',
            onChangeText: updateInputValueHandler.bind(this, 'confirmPassword'), //binding enables executing a function at a future time
            // value: inputs.enteredConfirmPassword.value,
          }}
          //   invalid={emailsDontMatch}
        />
      )}
      <View>
        <PrimaryButton onPressHandler={submitHandler}>
          {userStatusLabel}
        </PrimaryButton>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
