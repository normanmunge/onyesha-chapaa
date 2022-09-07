import { StyleSheet, View } from 'react-native';
import Input from '../ui/input';

const ExpenseForm = () => {
  const amountChangedHandler = () => {};

  return (
    <View>
      <Input
        label='Amount'
        inputConfig={{
          keyboadType: 'decimal-pad',
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label='Date'
        inputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label='Description'
        inputConfig={{
          multiline: true,
          autCorrect: false,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
