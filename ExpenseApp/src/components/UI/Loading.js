import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { GlobalStyles } from '../../color/Styles'

function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color={GlobalStyles.colors.gray800} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.gray200
    }
})

export default Loading