import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
