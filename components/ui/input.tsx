import { StyleSheet, View, Text, TextInput } from 'react-native';

interface inputProps {
  label?: string;
  inputConfig: any;
}

const Input: React.FC<inputProps> = ({ label, inputConfig }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...inputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
