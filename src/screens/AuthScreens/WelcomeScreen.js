import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../constants/themes";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation =useNavigation()
const handleLogin = ()=>{
  navigation.navigate("LoginScreen")
}
const handleRegister = ()=>{
navigation.navigate("RegisterScreen")
}
const guestHandle = ()=>{
navigation.navigate("HomeScreen")
}
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Price Tracker
        </Text>
        <Text style={styles.subtitle}>
          Great To See You 👋
        </Text>
       <View>
       <CustomButton title="Log in " onPress={handleLogin} style={styles.loginButton} />
        <CustomButton
          title="Register"
          onPress={handleRegister} 
          style={styles.registerButton}
          textStyle={styles.registerButtonText}
        />
       </View>
        <Pressable onPress={guestHandle} style={styles.guestButton} >
          <Text style={styles.guestButtonText}>
            Continue as Guest
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F6FB",
    justifyContent: "center",
    padding:20
  },
  title: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 36,
    color: COLORS.PRIMARY,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 21,
    color: COLORS.BLACK,
    textAlign: "center",
    marginTop: 10,
  },
  loginButton: {
    marginTop: 60,
  },
  registerButton: {
    marginTop: 16,
    backgroundColor: COLORS.SECONDARY,
  },
  registerButtonText: {
    color: COLORS.PRIMARY,
  },
  guestButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  guestButtonText: {
    fontFamily: "OpenSans-SemiBold",
    color: COLORS.PRIMARY,
  },
});
