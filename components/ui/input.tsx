import { StyleSheet, View, Text, TextInput } from 'react-native';
import { theme } from '../../constants/theme';

interface inputProps {
  label?: string;
  inputConfig: any;
  style?: any;
  invalid?: boolean;
}

const Input: React.FC<inputProps> = ({
  label,
  inputConfig,
  style,
  invalid,
}) => {
  const {
    inputContainer,
    labelText,
    input,
    inputMultiline,
    invalidLabel,
    invalidInput,
  } = styles;

  interface inputStyle {
    backgroundColor?: string;
    color?: string;
    padding?: number;
    borderRadius?: number;
    fontSize?: number;
    minHeight?: number;
    textAlignVertical?: string;
  }

  const inputStyles: inputStyle[] = [input];

  if (inputConfig && inputConfig.multiline) {
    inputStyles.push(inputMultiline);
  }

  return (
    <View style={[inputContainer, style]}>
      <Text style={[labelText, invalid && invalidLabel]}>{label}</Text>
      <TextInput
        {...inputConfig}
        style={[inputStyles, invalid && invalidInput]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  labelText: {
    fontSize: 12,
    color: theme.colors.primary_verylight,
    marginBottom: 4,
  },
  input: {
    backgroundColor: theme.colors.primary_verylight,
    color: theme.colors.primary_dark,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 150,
    textAlignVertical: 'top',
  },
  invalidLabel: {
    color: theme.colors.error,
  },
  invalidInput: {
    backgroundColor: theme.colors.error_lighter,
  },
});
