import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../constants/theme';
import LoginScreen from '../screens/authentication/Login';
import SingupScreen from '../screens/authentication/Signup';
import RecentExpensesScreen from '../screens/expenses/recent';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: theme.colors.white,
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SingupScreen} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = () => {
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: theme.colors.primary },
      headerTintColor: theme.colors.white,
    }}
  >
    <Stack.Screen name='Recent Expenses' component={RecentExpensesScreen} />
  </Stack.Navigator>;
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
