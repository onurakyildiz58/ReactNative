import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { GlobalStyles } from '../../color/Styles'
import { dateFormatter } from '../../utils/date'

function ExpensesItem({ id, description, amount, date }) {
    const navigation = useNavigation();

    function expensesHandle() {
        navigation.navigate('ManageExpenses', { expensesId: id });
    }

    return (
        <TouchableOpacity onPress={expensesHandle}>
            <View style={styles.expenseItem}>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{dateFormatter(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}₺</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    expenseItem: {
        padding: 10,
        paddingHorizontal: 25,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.gray300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.black,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.gray800,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        flex: 1,
        minWidth: 50,
        paddingVertical: 4,
        backgroundColor: GlobalStyles.colors.gray100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    amount: {
        color: GlobalStyles.colors.gray800,
        fontWeight: 'bold',
    },
    descriptionContainer: {
        flex: 4
    }
})

export default ExpensesItem