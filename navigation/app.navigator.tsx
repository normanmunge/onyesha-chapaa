import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../constants/theme';
import ManageExpenseScreen from '../screens/expenses/manage';
import TabNavigator from './tab.navigator';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTintColor: theme.colors.white,
        }}
      >
        <Stack.Screen
          name='TabNavigator'
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Manage Expense'
          component={ManageExpenseScreen}
          options={{ presentation: 'modal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
