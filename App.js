import { StyleSheet, Text, View } from 'react-native';
// importar el nuevo componente
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso React Native</Text>
      <Saludar></Saludar>
      <Saludar name ="Sebastian" edad ="27"/>
      <Saludar name ="Fabio" edad="39"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
