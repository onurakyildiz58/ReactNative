import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Modal } from 'react-native';

function CubeSides() {
  const [square1, setSquare1] = useState('#00000000');
  const [square2, setSquare2] = useState('#00000000');
  const [square3, setSquare3] = useState('#00000000');
  const [square4, setSquare4] = useState('#00000000');
  const [square5, setSquare5] = useState('#00000000');
  const [square6, setSquare6] = useState('#00000000');
  const [square7, setSquare7] = useState('#00000000');
  const [square8, setSquare8] = useState('#00000000');
  const [square9, setSquare9] = useState('#00000000');

  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => {
    setSelectedItem(null);
  }

  function selectColor(color, index) {
    switch (index) {
      case '1':
        setSquare1(color);
        setSelectedItem(null);
        break;
      case '2':
        setSquare2(color);
        setSelectedItem(null);
        break;
      case '3':
        setSquare3(color);
        setSelectedItem(null);
        break;
      case '4':
        setSquare4(color);
        setSelectedItem(null);
        break;
      case '5':
        setSquare5(color);
        setSelectedItem(null);
        break;
      case '6':
        setSquare6(color);
        setSelectedItem(null);
        break;
      case '7':
        setSquare7(color);
        setSelectedItem(null);
        break;
      case '8':
        setSquare8(color);
        setSelectedItem(null);
        break;
      case '9':
        setSquare9(color);
        setSelectedItem(null);
        break;
      default:
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: square1 }]} onPress={() => setSelectedItem('1')}></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: square2 }]} onPress={() => setSelectedItem('2')}></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: square3 }]} onPress={() => setSelectedItem('3')}></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: square4 }]} onPress={() => setSelectedItem('4')}></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: square5 }]} onPress={() => setSelectedItem('5')}></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: square6 }]} onPress={() => setSelectedItem('6')}></TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: square7 }]} onPress={() => setSelectedItem('7')}></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: square8 }]} onPress={() => setSelectedItem('8')}></TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { backgroundColor: square9 }]} onPress={() => setSelectedItem('9')}></TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        visible={selectedItem !== null}
        onRequestClose={closeModal}
      >
        {selectedItem && (
          <View style={styles.container}>
            <TouchableOpacity style={[styles.radio, { backgroundColor: '#ffffff' }]} onPress={() => selectColor('#ffffff', selectedItem)}></TouchableOpacity>
            <TouchableOpacity style={[styles.radio, { backgroundColor: '#ff0000' }]} onPress={() => selectColor('#ff0000', selectedItem)}></TouchableOpacity>
            <TouchableOpacity style={[styles.radio, { backgroundColor: '#0400ff' }]} onPress={() => selectColor('#0400ff', selectedItem)}></TouchableOpacity>
            <TouchableOpacity style={[styles.radio, { backgroundColor: '#ff8800' }]} onPress={() => selectColor('#ff8800', selectedItem)}></TouchableOpacity>
            <TouchableOpacity style={[styles.radio, { backgroundColor: '#00ff22' }]} onPress={() => selectColor('#00ff22', selectedItem)}></TouchableOpacity>
            <TouchableOpacity style={[styles.radio, { backgroundColor: '#eeff00' }]} onPress={() => selectColor('#eeff00', selectedItem)}></TouchableOpacity>
          </View>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    margin: 1
  },
  btn: {
    borderWidth: 1,
    borderColor: 'black',
    height: 35,
    width: 35,
    margin: 1,
  },
  modal: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-end',
    padding: 20
  },
  radio: {
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 2,
    height: 40,
    width: 40,
    marginBottom: 5
  }
});

export default CubeSides;