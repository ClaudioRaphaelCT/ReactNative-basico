import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/components/Logo';
import Input from './src/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo title="Meu 1º APP" />
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
});
