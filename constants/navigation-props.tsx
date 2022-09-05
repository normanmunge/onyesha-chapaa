// import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// type RootStackParamList = {
//   Tab: NavigatorScreenParams<TabParamList>;
//   Main: NavigatorScreenParams<MainStackParamList>;
// };

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  //   Home: undefined;
  //   Profile: { userId: string };
  //   Feed: { sort: 'latest' | 'top' } | undefined;
  Tab: undefined;
  Main: undefined;
};

// Navigation prop for your MainStack
type MainNavigationProp = NativeStackScreenProps<RootStackParamList, 'Tab'>;

// Navigation prop for your Home
// type HomeNavigationProp = NativeStackScreenProps<RootStackParamList, 'Profile'>;
