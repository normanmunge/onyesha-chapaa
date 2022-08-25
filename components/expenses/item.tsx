import { Pressable, View, Text, StyleSheet } from 'react-native';
import { theme } from '../../constants/theme';

interface expenseItemProps {
  description?: string;
  amount?: number;
  date?: any;
}

const ExpenseItem: React.FC<expenseItemProps> = ({
  description,
  amount,
  date,
}) => {
  const {
    itemContainer,
    itemText,
    descriptionText,
    amountContainer,
    amountText,
  } = styles;
  return (
    <Pressable>
      <View style={itemContainer}>
        <View>
          <Text style={[itemText, descriptionText]}>{description}</Text>
          <Text style={itemText}>{date}</Text>
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
    shadowColor: theme.colors.tertiary,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
  },
  itemText: {
    color: theme.colors.tertiary_lighter,
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
  },
  amountText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});
