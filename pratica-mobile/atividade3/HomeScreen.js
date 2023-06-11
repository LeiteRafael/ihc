import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const HomeScreen = () => {
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');
  const [zValue, setZValue] = useState('');

  useEffect(() => {
    const subscription = Accelerometer.addListener(accelerometerData => {
      const { x, y, z } = accelerometerData;
      setXValue(x.toFixed(2));
      setYValue(y.toFixed(2));
      setZValue(z.toFixed(2));
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Valor de aceleração X:</Text>
      <TextInput style={styles.input} value={xValue} editable={false} />

      <Text style={styles.label}>Valor de aceleração Y:</Text>
      <TextInput style={styles.input} value={yValue} editable={false} />

      <Text style={styles.label}>Valor de aceleração Z:</Text>
      <TextInput style={styles.input} value={zValue} editable={false} />
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
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default HomeScreen;
