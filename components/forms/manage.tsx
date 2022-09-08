import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from '../ui/input';

const ExpenseForm = () => {
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });

  const { inputsRow, rowInput, form, title } = styles;
  const inputChangedHandler = (
    inputIdentifier: string,
    enteredValue: string
  ) => {
    setInputValues((currInputValues) => {
      return {
        ...currInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  return (
    <View style={form}>
      <Text style={title}>Your Expense</Text>
      <View style={inputsRow}>
        <Input
          label='Amount'
          inputConfig={{
            keyboadType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'), //binding enables executing a function at a future time
            value: inputValues.amount,
          }}
          style={rowInput}
        />
        <Input
          label='Date'
          inputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
          style={rowInput}
        />
      </View>
      <Input
        label='Description'
        inputConfig={{
          multiline: true,
          autCorrect: false,
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
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
});
