/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../utils/style/Color';

function Button({ children, onPress, style, theme }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button(theme), style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: (theme) => ({
    flex: 1,
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 5,
    backgroundColor: theme === 'dark' ? GlobalStyles.colours.gray700 : GlobalStyles.colours.green500,
    elevation: 20,
    shadowColor: GlobalStyles.colours.white,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  }),
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: GlobalStyles.colours.gray100,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
