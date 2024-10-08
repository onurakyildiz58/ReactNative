/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../utils/style/Color';

function FlatButton({ children, onPress, theme }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText(theme)}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: (theme) => ({
    textAlign: 'center',
    color: theme === 'dark' ? GlobalStyles.colours.gray100 : GlobalStyles.colours.gray900,
  }),
});

export default FlatButton;
