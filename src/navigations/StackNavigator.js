import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import OnBoarding from "../screens/OnBoardingScreen";
import WelcomeScreen from "../screens/AuthScreens/WelcomeScreen";
import LoginScreens from "../screens/AuthScreens/LoginScreens";
import RegisterScreen from "../screens/AuthScreens/RegisterScreen";
import ForgetPasswordScreen from "../screens/AuthScreens/ForgetPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import ResetPasswordScreen from "../screens/AuthScreens/ResetPasswordScreen";
import ResetPasswordScreen2 from "../screens/AuthScreens/ResetPasswordScreen2";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreens}
          options={{
            headerShown: false,
            headerTransparent:true,
            title:"",
            headerTintColor: "#7B76ED",
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResetPasswordScreen2"
          component={ResetPasswordScreen2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
