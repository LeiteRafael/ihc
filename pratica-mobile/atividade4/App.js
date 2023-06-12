import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Sensors } from 'react-native-sensors';

const App = () => {
  const [lightLevel, setLightLevel] = useState(0);

  useEffect(() => {
    const subscription = Sensors.Lighting.subscribe(({ light }) => {
      setLightLevel(light);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nível de luz: {lightLevel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;