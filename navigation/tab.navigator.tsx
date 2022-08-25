import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import AllExpensesScreen from '../screens/expenses/all';
import RecentExpensesScreen from '../screens/expenses/recent';
import { theme } from '../constants/theme';
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
    headerStyle: { backgroundColor: theme.colors.primary },
    headerTintColor: 'white',
    tabBarStyle: {
      backgroundColor: theme.colors.primary,
    },
    tabBarActiveTintColor: theme.colors.accent,
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
