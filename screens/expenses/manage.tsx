import { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

const ManageExpenseScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>This is the screen to manage an expense</Text>
    </View>
  );
};

export default ManageExpenseScreen;
