import React, { useLayoutEffect, useContext, useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
  }, [navigation, isEdited])

  if (!!isEdited) {
    useEffect(() => {
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
    }, [editedExpenseId])
  }


  function deleteHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEdited) {
      expensesCtx.updateExpense(
        editedExpenseId,
        {
          description: description,
          amount: parseInt(price),
          date: date,
        }
      );
    } else {
      expensesCtx.addExpense({
        description: description,
        amount: parseInt(price),
        date: date,
      });
    }
    navigation.goBack();
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
        <Inputs pHolder={'Açıklama'} func={descriptionHandler} value={description} editable={true}/>
        <Inputs pHolder={'Ücret'} func={amountHandler} value={price.toString()} editable={true} />
        <TouchableOpacity onPress={showDatePicker}>
          <Inputs pHolder={'Tarih'} value={dateFormatter(date)} editable={false}/>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={showPicker}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
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
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ManageExpenses