import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ExpressoesJSX } from './jsx_examplas/02_expressoes_jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpressoesJSX/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
