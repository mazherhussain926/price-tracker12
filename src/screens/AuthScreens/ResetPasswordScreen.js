import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/themes";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ResetPasswordScreen({ route }) {
  const navigation = useNavigation();
  const { email } = route.params;

  // Create refs for each input box
  const inputRefs = useRef([]);
  // State to manage OTP validity
  const [otpValid, setOtpValid] = useState(true);
  // State to hold OTP values
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));
  // Hardcoded OTP value just to check UI
  const HARD_CODED_OTP = '234234';

  // Function to handle text change
  const handleChange = (text, index) => {
    // Update OTP values state
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;
    setOtpValues(newOtpValues);

    // Move to the next input box if text is not empty
    if (text.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to validate OTP
  const validateOtp = () => {
    // Concatenate values from all input boxes
    const otp = otpValues.join('');

    // Check if the entered OTP matches the hardcoded OTP
    if (otp === HARD_CODED_OTP) {
    
      // Proceed with OTP validation (e.g., API call)
      navigation.replace("ResetPasswordScreen2")
    } else {
      setOtpValid(false);
    }
  };

  // Function to handle request new code
  const handleRequestNewCode = () => {
    // Add logic to request a new OTP
    alert("Requesting new code...");
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.title}>Reset password</Text>
          <Text style={styles.description}>
            To reset your password, enter the verification code sent to your email.
          </Text>
          <Text style={styles.label}>
            {JSON.stringify(email)}{"   "}
            <Text
              onPress={() => navigation.goBack()}
              style={styles.editEmail}
            >
              Edit email
            </Text>
          </Text>

          <View style={styles.otpContainer}>
            {Array.from({ length: 6 }).map((_, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={[styles.otpInput, { borderColor: otpValid || otpValues.join('') === HARD_CODED_OTP ? COLORS.GRAY3 : COLORS.ERROR }]}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(text) => handleChange(text, index)}
                cursorColor={COLORS.GRAY3}
                selectionColor={COLORS.GRAY3}
              />
            ))}
          </View>

          {!otpValid && (
            <View>
              <View style={styles.errorContainer}>
                <MaterialIcons name="error-outline" size={24} color="#F03D3E" />
                <Text style={styles.errorText}>
                  We're sorry. That code isn't valid. Please try again or request a new code.
                </Text>
              </View>

              <Text
                onPress={handleRequestNewCode}
                style={styles.requestNewCode}
              >
                Request New Code
              </Text>
            </View>
          )}
          {otpValid && (
            <Text style={styles.label}>
              Resend Code in{" "}
              <Text style={styles.countdown}>
                01:00
              </Text>
            </Text>
          )}
        </ScrollView>

        {/* Button outside the ScrollView */}
        <View style={styles.btn}>
          <CustomButton
            style={{ backgroundColor: otpValid ? COLORS.PRIMARY : COLORS.GRAY4 }}
            title="Submit"
            onPress={validateOtp}
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
    marginTop:50,
    padding: 15,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 24,
    color: COLORS.BLACK,
    marginBottom: 5,
  },
  description: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    color: COLORS.GRAY4,
  },
  label: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 14,
    marginBottom: 10,
    marginTop: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    fontSize: 18,
    textAlign: 'center',
  },
  errorContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  errorText: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    color: COLORS.ERROR,
    marginBottom: 10,
    marginLeft:5,
    flex:1
  },
  editEmail: {
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
    color: COLORS.PRIMARY,
  },
  requestNewCode: {
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
    color: COLORS.PRIMARY,
    marginLeft:5

  },
  countdown: {
    fontFamily: "OpenSans-Bold",
    fontSize: 14,
    color: COLORS.PRIMARY,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
});
