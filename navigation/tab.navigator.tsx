import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllExpensesScreen from '../screens/expenses/all';
import RecentExpensesScreen from '../screens/expenses/recent';
const Stack = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='RecentExpenses'
        component={RecentExpensesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AllExpenses'
        component={AllExpensesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigator;
