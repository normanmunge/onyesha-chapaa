import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageExpenseScreen from '../screens/expenses/manage';
import TabNavigator from './tab.navigator';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='TabNavigator' component={TabNavigator} />
        <Stack.Screen
          name='Manage Expense'
          component={ManageExpenseScreen}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
