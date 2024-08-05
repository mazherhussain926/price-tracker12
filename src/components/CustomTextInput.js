import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "../constants/themes";

export default function CustomTextInput({
  placeholder,
  secureTextEntry,
  iconName,
  value,
  onChangeText,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPasswordVisible}
        cursorColor={COLORS.GRAY3}
        selectionColor={COLORS.GRAY3}
        value={value}
        onChangeText={onChangeText}
      />
      {iconName && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <AntDesign
            name={isPasswordVisible ? "eyeo" : "eye"}
            size={24}
            color={COLORS.GRAY3}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.GRAY3,
    borderWidth: 1,
    borderRadius: 5,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
