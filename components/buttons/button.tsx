import { View, Text, Pressable, StyleSheet } from 'react-native';

type ButtonProps = {
  //text: string;
  //rest of the props
};
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { btnInnerContainer, btnOutterContainer, btnPressed, btnText } = styles;
  const onPressHandler = () => {
    console.log('PRESSED!');
  };
  return (
    <View style={btnOutterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [btnInnerContainer, btnPressed] : btnInnerContainer
        }
        onPress={onPressHandler}
      >
        <Text style={btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnOutterContainer: {
    borderRadius: 6,
    margin: 4,
    overflow: 'hidden',
  },
  btnInnerContainer: {
    backgroundColor: '',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  btnPressed: {
    opacity: 0.75,
  },
});
