import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ReusableButton = ({ title, onPress, kind = 'primary', variant = 'filled', size = 'medium', iconOnly = false, icon, style, textStyle }) => {
  const buttonStyles = [styles.button, styles[kind], styles[variant], styles[size], style];
  const textStyles = [styles.text, textStyle];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      {icon && <Ionicons name={icon} size={24} color={textStyle?.color || '#fff'} />}
      {!iconOnly && <Text style={textStyles}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  primary: {
    backgroundColor: '#007bff',
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  filled: {
    borderWidth: 0,
  },
  outlined: {
    borderWidth: 1,
  },
  small: {
    padding: 5,
  },
  medium: {
    padding: 10,
  },
  large: {
    padding: 15,
  },
  text: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold'
  },
});

export default ReusableButton;
