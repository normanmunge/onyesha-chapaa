import { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Input from '../ui/input';
import PrimaryButton from '../../components/ui/buttons/primary-button';
import { getFormattedDate } from '../../utils/date';
import {
  isValidNumber,
  isValidDate,
  isValidString,
} from '../../utils/validations';
import { theme } from '../../constants/theme';

interface expenseFormProps {
  onCancel?: any;
  onSubmit?: any;
  submitLabelProp?: string;
  defaultValues?: any;
}
const ExpenseForm: React.FC<expenseFormProps> = ({
  onCancel,
  onSubmit,
  submitLabelProp,
  defaultValues,
}) => {
  const { amount, date, description } = defaultValues;

  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? description.toString() : '',
      isValid: true,
    },
  });

  const {
    inputsRow,
    rowInput,
    form,
    title,
    buttonsContainer,
    button,
    errorText,
  } = styles;

  const inputChangedHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputs((currInputs) => {
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
    const { amount, date, description } = inputs;

    type expenseDataProps = {
      amount: number;
      date: Date;
      description: string;
    };

    const expenseData: expenseDataProps = {
      amount: +amount.value,
      date: new Date(date.value),
      description: description.value,
    };

    const amountIsValid = isValidNumber(amount.value);
    const dateIsValid = isValidDate(date.value);
    const descripionIsValid = isValidString(description.value);

    if (!amountIsValid || !dateIsValid || !descripionIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values');
      // return;
      setInputs((currInputs) => {
        return {
          amount: { value: currInputs.amount.value, isValid: amountIsValid },
          date: { value: currInputs.date.value, isValid: dateIsValid },
          description: {
            value: currInputs.date.value,
            isValid: descripionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={form}>
      <Text style={title}>Your Expense</Text>
      <View style={inputsRow}>
        <Input
          label='Amount'
          inputConfig={{
            keyboadType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'), //binding enables executing a function at a future time
            value: inputs.amount.value,
          }}
          style={rowInput}
          invalid={!inputs.amount.isValid}
        />
        <Input
          label='Date'
          inputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
          style={rowInput}
          invalid={!inputs.date.isValid}
        />
      </View>
      <Input
        label='Description'
        inputConfig={{
          multiline: true,
          autCorrect: false,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
        invalid={!inputs.description.isValid}
      />
      {formIsInvalid && (
        <Text style={errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={buttonsContainer}>
        <PrimaryButton mode='flat' styleProp={button} onPressHandler={onCancel}>
          Cancel
        </PrimaryButton>
        <PrimaryButton styleProp={button} onPressHandler={submitHandler}>
          {submitLabelProp}
        </PrimaryButton>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: 'center',
    color: theme.colors.error,
    margin: 8,
  },
});
