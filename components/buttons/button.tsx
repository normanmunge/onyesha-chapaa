import { View, Text } from 'react-native';

type ButtonProps = {
  //text: string;
  //rest of the props
};
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default Button;
