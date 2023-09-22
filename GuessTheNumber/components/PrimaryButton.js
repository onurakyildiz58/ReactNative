import { Text, View, StyleSheet, Pressable } from 'react-native'
import Color from '../utils/Color'

function PrimaryButton(props) {
    return (
        <View style={styles.btnwrapper}>
            <Pressable
                onPress={props.func}
                style={({ pressed }) => pressed ? [styles.btn, styles.pressed] : styles.btn}
                >
                <Text style={styles.btntext}>{props.children}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    btnwrapper: {
        borderRadius: 15,
        marginHorizontal: 20,
        overflow: 'hidden',
    },
    btn: {
        elevation: 20,
        shadowColor: 'black',
        backgroundColor: Color.green900,
        width: 100,
        paddingVertical: 10
    },
    btntext: {
        fontSize: 20,
        textAlign: 'center',
        color: Color.white
    },
    pressed: { opacity: 0.75 }
})
export default PrimaryButton