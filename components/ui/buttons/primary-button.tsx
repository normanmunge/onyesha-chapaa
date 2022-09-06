import { View, Text, Pressable, StyleSheet } from 'react-native';
import { theme } from '../../../constants/theme';

type ButtonProps = {
  mode?: string;
  styleProp?: any;
  onPressHandler?: (params: any) => any;
};
const PrimaryButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  const {
    btnInnerContainer,
    btnOutterContainer,
    btnPressed,
    btnText,
    flat,
    flatText,
  } = styles;

  const { mode, styleProp, onPressHandler } = props;

  return (
    <View style={[btnOutterContainer, styleProp]}>
      <Pressable
        style={({ pressed }) => pressed && btnPressed}
        onPress={onPressHandler}
      >
        <View style={[btnInnerContainer, mode === 'flat' && flat]}>
          <Text style={[btnText, mode === 'flat' && flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOutterContainer: {
    borderRadius: 6,
    margin: 4,
    overflow: 'hidden',
  },
  btnInnerContainer: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  btnText: {
    color: theme.colors.white,
    textAlign: 'center',
  },
  btnPressed: {
    opacity: 0.75,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  flatText: {
    color: theme.colors.primary_lighter,
  },
});
