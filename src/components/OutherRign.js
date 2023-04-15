/**
 *  Outher Ring
 *  This component is responsible for rendering the outer ring of the Dartboard.
 */

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const OUTER_RING = [
  { value: 20, color: 'red' },
  { value: 1, color: 'black' },
  { value: 18, color: 'green' },
  { value: 4, color: 'red' },
  { value: 13, color: 'black' },
  { value: 6, color: 'green' },
  { value: 10, color: 'red' },
  { value: 15, color: 'black' },
  { value: 2, color: 'green' },
  { value: 17, color: 'red' },
  { value: 3, color: 'black' },
  { value: 19, color: 'green' },
  { value: 7, color: 'red' },
  { value: 16, color: 'black' },
  { value: 8, color: 'green' },
  { value: 11, color: 'red' },
  { value: 14, color: 'black' },
  { value: 9, color: 'green' },
  { value: 12, color: 'red' },
  { value: 5, color: 'black' },
];

const OuterRing = () => {
  const [selected, setSelected] = useState(null);

  const handlePress = (value) => {
    setSelected(value);
  };

  return (
    <View style={styles.container}>
      {OUTER_RING.map((item) => (
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

export default OuterRing;
