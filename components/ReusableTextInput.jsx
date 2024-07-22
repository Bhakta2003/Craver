import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const ReusableTextInput = ({ value, onChangeText, placeholder, style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default ReusableTextInput;
