import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { GlobalStyles } from '../../color/Styles';

function Inputs( props ) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={'Gider Adı'}
        onChangeText={props.func1}
        autoCapitalize={'none'}
        autoCorrect={false}
        value={props.value1}
        editable={true}
        keyboardType='default'
      />
      <TextInput
        style={styles.input}
        placeholder={'Fiyat'}
        onChangeText={props.func2}
        autoCapitalize={'none'}
        autoCorrect={false}
        value={props.value2}
        editable={true}
        keyboardType='decimal-pad'
      />
      <TouchableOpacity onPress={props.func3}>
        <TextInput
          style={styles.input}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={props.value3}
          editable={false} />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={props.visibility}
        mode="date"
        onConfirm={props.confirm}
        onCancel={props.cancel}
      />
    </View>
  )
}
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 5
  },
  input: {
    paddingVertical: 10,
    width: width - 40,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.gray600,
    paddingLeft: 10,
    marginBottom: 20
  },
})

export default Inputs