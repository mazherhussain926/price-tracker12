import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/themes';
const CustomButton = ({ onPress, title, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 8,
    alignItems: 'center',
    width:"100%",
    height:40,
    alignItems:"center",
    justifyContent:"center"
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily:"OpenSans-SemiBold"
  },
});

export default CustomButton;
