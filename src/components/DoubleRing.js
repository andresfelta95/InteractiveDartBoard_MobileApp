/**
 * Double Ring
 * This component is responsible for rendering the double ring of the Dartboard.
 */

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const DOUBLE_RING = [
  { value: 20, color: 'white' },
  { value: 1, color: 'black' },
  { value: 18, color: 'white' },
  { value: 4, color: 'black' },
  { value: 13, color: 'white' },
  { value: 6, color: 'black' },
  { value: 10, color: 'white' },
  { value: 15, color: 'black' },
  { value: 2, color: 'white' },
  { value: 17, color: 'black' },
  { value: 3, color: 'white' },
  { value: 19, color: 'black' },
  { value: 7, color: 'white' },
  { value: 16, color: 'black' },
  { value: 8, color: 'white' },
  { value: 11, color: 'black' },
  { value: 14, color: 'white' },
  { value: 9, color: 'black' },
  { value: 12, color: 'white' },
  { value: 5, color: 'black' },
];

const DoubleRing = () => {
  const [selected, setSelected] = useState(null);

  const handlePress = (value) => {
    setSelected(value);
  };

  return (
    <View style={styles.container}>
      {DOUBLE_RING.map((item) => (
        <TouchableOpacity
          key={item.value}
          onPress={() => handlePress(item.value)}
          style={[
            styles.section,
            { backgroundColor: selected === item.value ? 'yellow' : item.color },
          ]}
        >
          <Text style={styles.value}>{`${item.value} x 2`}</Text>
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

export default DoubleRing;
