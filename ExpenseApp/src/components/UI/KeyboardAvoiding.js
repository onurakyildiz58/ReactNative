/* not gonna imported just practice */ 

import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native'

function KeyboardAvoiding({ children }) {
    return (
        <SafeAreaView style={styles.area}>
            <KeyboardAvoidingView
                style={styles.area}
                behavior={Platform.OS === "ios" ? 'padding' : 'height'}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    area: {
        flex: 1
    },
    content: {
        padding: 20,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 50 : 50
    }
})
export default KeyboardAvoiding