import React, { useLayoutEffect, useContext, useState } from 'react'
import { StyleSheet, View, Alert, Text} from 'react-native'

import IconBtn from '../components/UI/IconBtn';
import { GlobalStyles } from '../color/Styles';
import Button from '../components/UI/Button';
import Inputs from '../components/UI/Inputs';

import { ExpensesContext } from '../store/expenses-context'
import { dateFormatter } from '../utils/date';

function ManageExpenses({ route, navigation }) {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expensesId;
  const isEdited = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdited ? 'Giderleri Düzenle' : 'Gider Ekle'
    })
    if (!!isEdited) {
      const expense = expensesCtx.expenses.find(expense => expense.id === editedExpenseId);

      if (expense) {
        // Fetch values from the found expense
        const descriptionValue = expense.description;
        const priceValue = expense.amount;
        const dateValue = expense.date;

        setDescription(descriptionValue);
        setPrice(priceValue);
        setDate(dateValue);
      }
    }
  }, [navigation, isEdited, editedExpenseId])

  function deleteHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function confirmHandler() {
    if (description === '') {
      Alert.alert('Gecersiz', 'Harcama Boş Kalamaz', [{ text: 'tamam', style: 'cancel' }])
    }
    else if(price === '' ){
      Alert.alert('Gecersiz', 'Fiyat Boş Kalamaz', [{ text: 'tamam', style: 'cancel' }])
    }
    else if (parseFloat(price) < 0) {
      Alert.alert('Gecersiz', 'Fiyat 0\'ın Altında Olamaz', [{ text: 'tamam', style: 'cancel' }])
    }
    else {
      if (isEdited) {
        expensesCtx.updateExpense(
          editedExpenseId,
          {
            description: description,
            amount: parseFloat(price),
            date: date,
          }
        );
      } else {
        expensesCtx.addExpense({
          description: description,
          amount: parseFloat(price),
          date: date,
        });
      }
      navigation.goBack();
    }

  }

  function cancelHandler() {
    navigation.goBack();
  }

  function descriptionHandler(enteredDescription) {
    setDescription(enteredDescription)
  }
  function amountHandler(enteredAmount) {
    setPrice(enteredAmount)
  }

  function showDatePicker() {
    setShowPicker(true);
  }
  function hideDatePicker() {
    setShowPicker(false);
  }
  function handleConfirm(selectedDate) {
    hideDatePicker();
    if (selectedDate) {
      setDate(selectedDate);
    }
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.inputs}>
        <Inputs
          func1={descriptionHandler} value1={description}
          func2={amountHandler} value2={price.toString()}
          func3={showDatePicker} value3={dateFormatter(date)}
          visibility={showPicker} confirm={handleConfirm} cancel={hideDatePicker}
        />
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={cancelHandler}>İptal</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEdited ? 'Güncelle' : 'Ekle'}</Button>
      </View>
      {isEdited &&
        <View style={styles.deleteContainer}>
          <IconBtn name="trash" size={30} color={GlobalStyles.colors.error} onPress={deleteHandler} />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 100,
    backgroundColor: GlobalStyles.colors.gray200
  },
  deleteContainer: {
    paddingTop: 8,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.gray800,
    marginHorizontal: 50,
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  inputs: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ManageExpenses