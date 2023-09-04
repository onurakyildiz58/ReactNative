import { Text, View, StyleSheet, Pressable } from 'react-native'

function PrimaryButton(props) {
    return (
        <View style={styles.btnwrapper}>
            <Pressable
                onPress={props.func}
                style={({ pressed }) => pressed ? [styles.btn, styles.pressed] : styles.btn}
                >
                <Text style={styles.btntext}>{props.childeren}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    btnwrapper: {
        borderRadius: 15,
        marginHorizontal: 20,
        overflow: 'hidden'
    },
    btn: {
        elevation: 20,
        shadowColor: 'black',
        backgroundColor: '#bbb5b5',
        width: 100,
        paddingVertical: 10
    },
    btntext: {
        fontSize: 20,
        textAlign: 'center'
    },
    pressed: { opacity: 0.75 }
})
export default PrimaryButton