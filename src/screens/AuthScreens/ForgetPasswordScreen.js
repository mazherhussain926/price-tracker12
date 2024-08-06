import React, { useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/themes";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import { useNavigation } from "@react-navigation/native";

export default function ForgetPasswordScreen() {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
const handlSendVerificationCode =()=> {
  if(!email){
    return alert("Please Enter Email")
  }
  navigation.navigate("ResetPasswordScreen",{email})
  setEmail("")
}
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <FontAwesome5
            name="arrow-left"
            size={20}
            color={COLORS.PRIMARY}
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>Forget Your Password?</Text>
          <Text style={styles.description}>
            Please enter your email, and we'll send you a verification code to reset your password!
          </Text>

          <Text style={styles.label}>Email</Text>
          <CustomTextInput
            placeholder="Enter Your Email"
            value={email}
            onChangeText={setEmail}
          />
        </ScrollView>

        {/* Button outside the ScrollView */}
        <View style={styles.btn}>
          <CustomButton
            title="Send Verification Code"
            onPress={handlSendVerificationCode}
          />
        </View>
      </KeyboardAvoidingView>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  container: {
    padding: 15,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  backIcon: {
    marginBottom: 20,
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 24,
    color: COLORS.BLACK,
    marginBottom: 5,
    marginTop:15
  },
  description: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    color: COLORS.GRAY4,
  },
  label: {
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
    marginBottom: 10,
    marginTop: 74,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
});
