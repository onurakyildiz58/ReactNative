import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Color } from './src/styles/Color'
import InputForm from './src/component/InputForm';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.gray100} />
      <Text style={styles.text}>Youtube'tan İndirmek İstediğin Şarkının Linkini Kopyalamak İçin Paylaşa Bastıktan sonra Bağlantıyı Kopyala Yazısına Tıkla Ardından Aşağıdaki Yere Yapıştır</Text>
      <InputForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.gray100,
    padding: 25,
    marginTop: 100,
  },
  text: {
    marginVertical: 12,
    fontSize: 15,
    backgroundColor: Color.gray700,
    padding: 10,
    color: Color.gray100,
    borderRadius: 8
  }
});
