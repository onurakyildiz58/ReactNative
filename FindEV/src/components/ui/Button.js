/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../utils/style/Color';

function Button({ children, onPress, style }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 5,
    backgroundColor: GlobalStyles.colours.green500,
    elevation: 2,
    shadowColor: GlobalStyles.colours.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
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
