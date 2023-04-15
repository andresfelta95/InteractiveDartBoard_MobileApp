/**
 * BullsEye
 * This component is responsible for rendering the bulls eye of the Dartboard.
 */

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BULLSEYE = [
  { value: 'Double Bullseye', multiplier: 2, color: 'red' },
  { value: 'Single Bullseye', multiplier: 1, color: 'green' },
];

const Bullseye = () => {
  const [selected, setSelected] = useState(null);

  const handlePress = (multiplier) => {
    setSelected(multiplier);
  };

  return (
    <View style={styles.container}>
      {BULLSEYE.map((item) => (
        <TouchableOpacity
          key={item.multiplier}
          onPress={() => handlePress(item.multiplier)}
          style={[
            styles.section,
            { backgroundColor: selected === item.multiplier ? 'yellow' : item.color },
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

export default Bullseye;


