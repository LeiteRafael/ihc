import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');

  const sumValues = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    setResult(`Resultado: ${num1 + num2}`);

  };

  return (
    <View style={styles.container}>
      <View style={styles.blueDiv}>
        <Text style={styles.blueText}>Atividade 1 - Soma 2 números</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro valor"
        onChangeText={(text) => setValue1(text)}
        value={value1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo valor"
        onChangeText={(text) => setValue2(text)}
        value={value2}
        keyboardType="numeric"
      />
      <Button title="Somar" onPress={sumValues} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  blueText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
