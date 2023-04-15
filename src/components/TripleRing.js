/**
 * Triple Ring
 * This component is responsible for rendering the triple ring of the Dartboard.
 */

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TRIPLE_RING = [
  { value: 20, color: 'red' },
  { value: 1, color: 'green' },
  { value: 18, color: 'red' },
  { value: 4, color: 'green' },
  { value: 13, color: 'red' },
  { value: 6, color: 'green' },
  { value: 10, color: 'red' },
  { value: 15, color: 'green' },
  { value: 2, color: 'red' },
  { value: 17, color: 'green' },
  { value: 3, color: 'red' },
  { value: 19, color: 'green' },
  { value: 7, color: 'red' },
  { value: 16, color: 'green' },
  { value: 8, color: 'red' },
  { value: 11, color: 'green' },
  { value: 14, color: 'red' },
  { value: 9, color: 'green' },
  { value: 12, color: 'red' },
  { value: 5, color: 'green' },
];

const TripleRing = () => {
  const [selected, setSelected] = useState(null);

  const handlePress = (value) => {
    setSelected(value);
  };

  return (
    <View style={styles.container}>
      {TRIPLE_RING.map((item) => (
        <TouchableOpacity
          key={item.value}
          onPress={() => handlePress(item.value)}
          style={[
            styles.section,
            { backgroundColor: selected === item.value ? 'yellow' : item.color },
          ]}
        >
          <Text style={styles.value}>{`${item.value} x 3`}</Text>
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
    width: '33.3%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  value: {
    fontSize: 20,
  },
});

export default TripleRing;
