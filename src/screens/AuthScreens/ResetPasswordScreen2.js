import React, { useState } from "react";
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants/themes";
import CustomButton from "../../components/CustomButton";
import CustomTextInput from "../../components/CustomTextInput";
import { useNavigation } from "@react-navigation/native";

export default function ForgetPasswordScreen2() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>Reset Password</Text>
                    <Text style={styles.description}>
                        Please enter your new password below.
                    </Text>
                    <View style={{ marginTop: 50 }}>
                        <Text style={styles.label}>New Password</Text>
                        <CustomTextInput
                            placeholder="Enter Your New Password"
                            secureTextEntry={true}
                            iconName="eyeo"
                            value={newPassword}
                            onChangeText={setNewPassword}
                        />
                        <Text style={[styles.description,{paddingVertical:8}]}> 
                        Use a minimum of 8 characters and 1 uppercase letter.
                        </Text>
                        <Text style={styles.label}>Confirm New Password</Text>
                        <CustomTextInput
                            placeholder="Enter Your New Password Again"
                            secureTextEntry={true}
                            iconName="eyeo"
                            value={confirmNewPassword}
                            onChangeText={setConfirmNewPassword}
                        />
                    </View>

                </ScrollView>

                {/* Button outside the ScrollView */}
                <View style={styles.btn}>
                    <CustomButton onPress={()=>navigation.navigate("LoginScreen")}
                        title="Change Password"
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
        marginTop: 50
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
        fontFamily: "OpenSans-Bold",
        fontSize: 14,
        marginBottom: 8,

    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150,
    },
});
