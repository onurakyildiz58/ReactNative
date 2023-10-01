import { FlatList, Text } from 'react-native';
import ExpensesItem from './ExpensesItem';

function renderExpenseItem(itemData) {
  return <ExpensesItem
    id={itemData.item.id}
    description={itemData.item.description}
    amount={itemData.item.amount}
    date={itemData.item.date} />
}

function ExpensesList({ expenses }) {
  return <FlatList
    data={expenses}
    renderItem={renderExpenseItem}
    keyExtractor={(item) => item.id} />;
}

export default ExpensesList;