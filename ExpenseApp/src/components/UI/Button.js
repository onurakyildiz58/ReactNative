import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../color/Styles';

function Button({ children, onPress, style }) {
    return (
        <View style={style}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: GlobalStyles.colors.gray300,
        elevation: 10,
        shadowColor: GlobalStyles.colors.gray900,
        shadowRadius: 10,
        shadowOffset: { width: 5, height: 1 },
        shadowOpacity: 1,
    },
    buttonText: {
        color: GlobalStyles.colors.gray800,
        textAlign: 'center',
        fontSize: 18
    }
});