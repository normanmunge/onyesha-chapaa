import { StyleSheet } from 'react-native';
import { useState } from 'react';
import LoginScreen from './screens/authentication/Login';
// import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpensesScreen from './screens/expenses/recent';
import ManageExpenseScreen from './screens/expenses/manage';
import AppNavigator from './navigation/app.navigator';
import ExpensesContextProvider from './store/expenses-context';

// const Stack = createNativeStackNavigator();
// const BottomTabs = createBottomTabNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  // if (!appIsReady) {
  //   return null;
  // }

  const userToken = false;

  return (
    <>
      <StatusBar style='light' />

      {userToken ? ( //user not signed in
        // <Stack.Screen name='SignIn' component={LoginScreen} options={{}} />

        <LoginScreen />
      ) : (
        <ExpensesContextProvider>
          {/* //user signed in */}
          <AppNavigator />
        </ExpensesContextProvider>
      )}
    </>
  );
  // return <LoginScreen />;
}

const styles = StyleSheet.create({});
