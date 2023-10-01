import { View, StyleSheet, Text } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

import { GlobalStyles } from '../../color/Styles';

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.gray200
  },
  infoText: {
    color: GlobalStyles.colors.gray800,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
})

export default ExpensesOutput;