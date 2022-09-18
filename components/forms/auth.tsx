import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { isValidNumber, isValidString } from '../../utils/validations';

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

  const [inputs, setInputs] = useState<any>({
    email: {
      value: '',
      isValid: true,
    },
    confirmEmail: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    confirmPassword: {
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

    const { email, confirmEmail, password, confirmPassword } = inputs;

    type authDataProps = {
      email: string;
      confirmEmail: string;
      password: string;
      confirmPassword: string;
    };

    const authData: authDataProps = {
       email: email.value,
      confirmEmail: confirmEmail.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    };

    //const phoneIsValid = isValidNumber(phone.value);
    const emailIsValid = isValidString(email.value);
    const confirmEmailIsValid = isValidString(email.value);
    const passwordIsValid = isValidString(password.value);
    const confirmPasswordIsValid = isValidString(password.value);

    if (!emailIsValid || !passwordIsValid || (!isLogin && (!confirmEmailIsValid || !confirmPasswordIsValid))) {

       setInputs((currInputs: any) => {
        return {
          email: { value: currInputs.email.value, isValid: emailIsValid },
          confirmEmail: {
            value: currInputs.confirmEmail.value,
            isValid: confirmEmailIsValid
          },
          password: {
            value: currInputs.password.value,
            isValid: passwordIsValid,
          },
          confirmPassword: {
            value: currInputs.confirmPassword.value,
            isValid: confirmPasswordIsValid,
          },
        };
      });
      return;
    }
    onSubmit(authData);
  };

  let userStatusLabel = isLogin ? 'Log In' : 'Sign Up';

  return (
    <View>
      <Input
        label='Email Address'
        inputConfig={{
          keyboadType: 'email-address',
          onChangeText: updateInputValueHandler.bind(this, 'email'), //binding enables executing a function at a future time
          value: inputs.email.value,
        }}
        invalid={!inputs.email.isValid}
      />
      {!isLogin && (
        <Input
          label='Confirm Email Address'
          inputConfig={{
            keyboadType: 'email-address',
            onChangeText: updateInputValueHandler.bind(this, 'confirmEmail'), //binding enables executing a function at a future time
            value: inputs.confirmEmail.value,
          }}
          invalid={!inputs.confirmEmail.isValid}
        />
      )}
      <Input
        label='Password'
        inputConfig={{
          keyboadType: 'secure',
          onChangeText: updateInputValueHandler.bind(this, 'password'), //binding enables executing a function at a future time
          secureTextEntry: true,
          value: inputs.password.value,
        }}
        invalid={!inputs.password.isValid}
      />
      {!isLogin && (
        <Input
          label='Confirm Password'
          inputConfig={{
            keyboadType: 'secure',
            onChangeText: updateInputValueHandler.bind(this, 'confirmPassword'), //binding enables executing a function at a future time
            secureTextEntry: true,
            value: inputs.confirmPassword.value,
          }}
          invalid={!inputs.confirmPassword.isValid}
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
