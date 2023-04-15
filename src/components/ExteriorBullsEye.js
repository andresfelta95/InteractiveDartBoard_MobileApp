/**
 * Exterior Bulls Eye
 * This component is responsible for rendering the exterior bulls eye of the Dartboard.
 */

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BULLSEYE = [
  { value: 'Bullseye', color: 'red' },
  { value: 'Outer Bull', color: 'green' },
];

const EBullseye = () => {
  const [selected, setSelected] = useState(null);

  const handlePress = (value) => {
    setSelected(value);
  };

  return (
    <View style={styles.container}>
      {BULLSEYE.map((item) => (
        <TouchableOpacity
          key={item.value}
          onPress={() => handlePress(item.value)}
          style={[
            styles.section,
            { backgroundColor: selected === item.value ? 'yellow' : item.color },
          ]}
        >
          <Text style={styles.value}>{item.value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  section: {
    width: '50%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  value: {
    fontSize: 20,
  },
});

export default EBullseye;
