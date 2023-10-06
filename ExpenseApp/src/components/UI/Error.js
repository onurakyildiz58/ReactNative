import { Text, StyleSheet, View } from 'react-native'
import { GlobalStyles } from '../../color/Styles'

function Error({ message }) {
    return(
        <View style={styles.container}>
            <Text style={[styles.title, styles.text]}>Hata!</Text>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.gray200,
      },
      text: {
        color: GlobalStyles.colors.gray800,
        textAlign: 'center',
        marginBottom: 8,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
})

export default Error