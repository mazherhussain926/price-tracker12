import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../constants/themes';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import CustomButton from '../../components/CustomButton';
import SocialLoginButtons from '../../components/SocialLoginButtons';
import CustomTextInput from '../../components/CustomTextInput';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        <Text style={styles.title}>Login</Text>
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
        <View style={styles.rememberForgotContainer}>
          <View style={styles.rememberMeContainer}>
            <Feather name="square" size={24} color={COLORS.GRAY3} />
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <Pressable>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </Pressable>
        </View>
        <View style={styles.loginButtonContainer}>
          <CustomButton
            title="Login"
            onPress={() => navigation.replace('HomeScreen')}
          />
        </View>
        <View style={styles.dividerContainer}>
          <Text style={styles.dividerLine} />
          <Text style={styles.orLoginWithText}>or login with</Text>
          <Text style={styles.dividerLine} />
        </View>
        <SocialLoginButtons />
        <View style={styles.signupContainer}>
          <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.signupText}>
              Don't have an account?{' '}
              <Text style={styles.signupLinkText}>Sign Up</Text>
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
    marginBottom: 30,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: COLORS.BLACK,
    marginBottom: 10,
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    marginBottom: 15,
  },
  rememberForgotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    marginLeft: 5,
  },
  forgotPasswordText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color: COLORS.PRIMARY,
  },
  loginButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 80,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dividerLine: {
    width: '30%',
    height: 1,
    backgroundColor: COLORS.GRAY3,
  },
  orLoginWithText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 25,
    width: '80%',
  },
  signupText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: COLORS.BLACK,
  },
  signupLinkText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    color: COLORS.PRIMARY,
  },
});
