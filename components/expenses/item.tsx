import { Pressable, View, Text, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';
import { getFormattedDate } from '../../utils/date';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

interface expenseItemProps {
  description?: string;
  amount?: number;
  date?: Date;
  id: any;
}

const ExpenseItem: React.FC<expenseItemProps> = ({
  id,
  description,
  amount,
  date = new Date(Date.now()),
}) => {
  const navigation = useNavigation();

  const {
    itemContainer,
    itemText,
    descriptionText,
    amountContainer,
    amountText,
    tapped,
  } = styles;

  function expensePressHandler() {
    navigation.navigate('Manage Expense', {
      expenseId: id,
    });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && tapped}
    >
      <View style={itemContainer}>
        <View>
          <Text style={[itemText, descriptionText]}>{description}</Text>
          <Text style={itemText}>{getFormattedDate(date)}</Text>
        </View>
        <View style={amountContainer}>
          <Text style={amountText}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: theme.colors.error,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
  },
  itemText: {
    color: theme.colors.error_lighter,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amountText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  tapped: {
    opacity: 0.75,
  },
});
