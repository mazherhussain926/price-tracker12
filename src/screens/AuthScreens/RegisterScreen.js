import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/themes";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
import CustomButton from "../../components/CustomButton";
import SocialLoginButtons from "../../components/SocialLoginButtons";
import CustomTextInput from "../../components/CustomTextInput";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <FontAwesome5
          name="arrow-left"
          size={20}
          color={COLORS.PRIMARY}
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.label}>Name</Text>
        <CustomTextInput
          placeholder="Enter Your Name"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email</Text>
        <CustomTextInput
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Password</Text>
        <CustomTextInput
          placeholder="Enter Your Password"
          secureTextEntry={true}
          iconName="eyeo"
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <CustomTextInput
          placeholder="Enter Your Password"
          secureTextEntry={true}
          iconName="eyeo"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View style={styles.agreementContainer}>
          <Feather name="square" size={24} color={COLORS.GRAY3} />
          <Text style={styles.agreementText}>
            Agree{" "}
            <Text style={styles.agreementLink}>Privacy Policy</Text>
            {" "} &{" "}
            <Text style={styles.agreementLink}>User Agreement</Text>
          </Text>
        </View>

        <View style={styles.registerButtonContainer}>
          <CustomButton
            title="Register"
            onPress={() => navigation.replace("HomeScreen")}
          />
        </View>
        <View style={styles.dividerContainer}>
          <Text style={styles.dividerLine} />
          <Text style={styles.orSignUpText}>or sign up with</Text>
          <Text style={styles.dividerLine} />
        </View>
        <SocialLoginButtons />
        <View style={styles.signupContainer}>
          <Pressable onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.alreadyHaveAccountText}>
              Already have an account?{" "}
              <Text style={styles.loginText}>Login</Text>
            </Text>
          </Pressable>
        </View>
      </View>
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
  backIcon: {
    marginBottom: 10,
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 24,
    color: COLORS.BLACK,
    marginBottom: 5,
  },
  label: {
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
    marginBottom: 10,
  },
  agreementContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  agreementText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    marginLeft: 5,
  },
  agreementLink: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    color: COLORS.PRIMARY,
  },
  registerButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  dividerLine: {
    width: "30%",
    height: 1,
    backgroundColor: COLORS.GRAY3,
  },
  orSignUpText: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
    color: COLORS.BLACK,
    textAlign: "center",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 10,
    width: "80%",
  },
  alreadyHaveAccountText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    color: COLORS.BLACK,
  },
  loginText: {
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
    color: COLORS.BLACK,
  },
});
