/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [enteredDate, setEnteredDate] = useState('');
  const [age, setAge] = useState('');
  const [showAge, setShowAge] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    // Load entered date from AsyncStorage on component mount
    AsyncStorage.getItem('enteredDate').then(storedDate => {
      if (storedDate) {
        setEnteredDate(storedDate);
        setShowAge(true);
        setShowForm(false);
      }
    });
  }, []);

  const getTextHandler = enteredText => {
    setEnteredDate(enteredText);
  };

  const asd = () => {
    setShowAge(true);
    setShowForm(false);
    // Save entered date to AsyncStorage
    AsyncStorage.setItem('enteredDate', enteredDate);
  };

  const calculateAge = () => {
    const [day, month, year, hour, minute] = enteredDate.split('/').map(Number);
    const birthDate = new Date(year, month - 1, day, hour || 0, minute || 0);
    const currentDate = new Date();

    const ageDifferenceInSeconds = (currentDate - birthDate) / 1000;
    if (currentDate.getFullYear() % 4 === 0) {
      const agea = ageDifferenceInSeconds / 31622400;
      setAge(agea.toString());
    } else {
      const agea = ageDifferenceInSeconds / 31536000;
      setAge(agea.toString());
    }
  };

  useEffect(() => {
    const intervalId = setInterval(calculateAge, 500);

    return () => clearInterval(intervalId);
  }, [enteredDate]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {showForm && (
          <>
            <TextInput
              style={styles.input}
              autoCapitalize={'none'}
              autoCorrect={false}
              placeholder="Doğum Tarihi Giriniz"
              onChangeText={getTextHandler}
              value={enteredDate}
            />
            <TouchableOpacity style={styles.btn} onPress={asd}>
              <Text style={styles.btnText}>Kaydet</Text>
            </TouchableOpacity>
          </>
        )}
        {showAge && <Text>{age}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 30,
    backgroundColor: 'white',
  },
  input: {
    paddingVertical: 10,
    width: '100%',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    paddingLeft: 10,
    marginBottom: 20,
  },
  wrapper: {
    alignItems: 'center',
  },
  btn: {
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    width: '40%',
  },
  btnText: {
    fontSize: 22,
    textAlign: 'center',
  },
});

export default App;
