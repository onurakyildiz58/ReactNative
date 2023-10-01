import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../color/Styles'

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>Toplam</Text>
      <Text style={styles.sum}>₺{expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.gray300,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.gray800
  },
  sum:{
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.gray900
  }
})

export default ExpensesSummary;