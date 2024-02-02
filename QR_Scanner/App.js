import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons'

export default function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [Data, setData] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data);
    setShowScanner(false)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function getBarcode(enteredText) {
    setData(enteredText);
  }

  function enableScanner() {
    setShowScanner(true);
    setScanned(false);
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={styles.input}
          placeholder={'Enter Code or Scan'}
          onChangeText={getBarcode}
          autoCapitalize={'none'}
          autoCorrect={false}
          value={Data}
          editable={true}
          keyboardType='default' />
        <TouchableOpacity style={{marginLeft: 5}} onPress={enableScanner}>
          <Ionicons style={styles.btn} name='qr-code' size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      {showScanner && (
        <Camera
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  scanText: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
    textAlign: 'center',
  },
  input: {
    paddingVertical: 10,
    width: 300,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    paddingLeft: 10,
    marginBottom: 20,
  },
  btn: {
    borderWidth:1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 10,
  }
});
