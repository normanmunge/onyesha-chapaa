import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from '../constants/styles';
import { Ionicons } from '@expo/vector-icons';

import AllExpensesScreen from '../screens/expenses/all';
import RecentExpensesScreen from '../screens/expenses/recent';
const Stack = createBottomTabNavigator();

enum TAB_ICON {
  RecentExpenses = 'hourglass',
  AllExpenses = 'calendar',
}

const stackNavigatorOptions = ({ route }: { route: any }) => {
  console.log(route);
  const { name } = route;
  const routeIndex = Object.keys(TAB_ICON).indexOf(name);
  const iconName = Object.values(TAB_ICON)[routeIndex];

  return {
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor: 'white',
    tabBarStyle: {
      backgroundColor: GlobalStyles.colors.primary500,
    },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    tabBarIcon: ({ color, size = 20 }: { color: string; size: number }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const TabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen name='RecentExpenses' component={RecentExpensesScreen} />
      <Stack.Screen name='AllExpenses' component={AllExpensesScreen} />
    </Stack.Navigator>
  );
};

export default TabNavigator;
