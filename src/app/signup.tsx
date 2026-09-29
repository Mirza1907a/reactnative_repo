
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { push, ref ,set } from 'firebase/database';
import { database } from './firebase/firebaseConfig';
export default function SignupScreen() {
const [username,setusername] = useState('')
const [useremail,setuseremail] = useState('')
const [userpassword,setuserpassword] = useState('')
const [userrepassword,setuserrepassword] = useState('')
const handleaccount = async () =>
{
  if(!username || !useremail  || !userrepassword || !userrepassword)
{
  alert("Please fill all the inputs")
}
else if (userpassword == userrepassword && userpassword.length > 8 
  && userrepassword.length > 8 && /[A-Z]/.test(userpassword) 
  && /[a-z]/.test(userpassword) 
  && /[0-9]/.test(userpassword))
{
  const useref = push(ref(database,'users'))
  await set(useref,{
    name : username,
    email : useremail,
    password : userpassword,
    status : 'users'
  })
  alert("account created successfully")
  router.push('/login')
}
else{
  alert("Password does not matched or less then 8 digits or does not contain uppercase,lowercase,special character and number")
}
}
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}>
      {/* Background Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Welcome!</Text>
        <Text style={styles.headerSubtitle}>
          Create your Baby Shop account
        </Text>
      </View>
      {/* Signup Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Enter your details below to get started.
        </Text>
        {/* Full Name */}
        <View style={styles.inputContainer}>
          <TextInput
          onChangeText={setusername}
          value={username}
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#A0A0A0"
          />
        </View>
        {/* Email */}
        <View style={styles.inputContainer}>       
          <TextInput
              onChangeText={setuseremail}
          value={useremail}
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#A0A0A0"
            keyboardType="email-address"
            autoCapitalize="none"/>
        </View>
        {/* Password */}
        <View style={styles.inputContainer}>        
          <TextInput
           onChangeText={setuserpassword}
          value={userpassword}
            style={styles.input}
            placeholder="Create a password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry/>
        </View>
        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <TextInput
           onChangeText={setuserrepassword}
          value={userrepassword}
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry/>
        </View>
        {/* Signup Button */}
        <TouchableOpacity
        onPress={handleaccount}
          style={styles.signupButton}
          activeOpacity={0.8}>
          <Text style={styles.signupText}>Create Account</Text>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
        {/* Login */}
        <TouchableOpacity
          onPress={() => router.push('/login')}
          activeOpacity={0.7}>
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginBold}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#EAF7F6',
  },
  content: {
    paddingBottom: 40,
  },
  /* Top Background */
  header: {
    backgroundColor: '#6EC6C0',
    height: 280,
    paddingTop: 55,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: 'rgba(255,255,255,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 38,
    lineHeight: 40,
    fontWeight: '300',
    marginTop: -4,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    marginTop: 28,
  },
  headerSubtitle: {
    color: '#EFFFFE',
    fontSize: 16,
    marginTop: 7,
  },
  /* White Form Card */
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -55,
    borderRadius: 30,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 15,
    elevation: 8,
  },
  title: {
    fontSize: 27,
    fontWeight: '800',
    color: '#202124',
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 28,
    lineHeight: 20,
  },
  /* Inputs */
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#454545',
    marginBottom: 8,
    marginLeft: 3,
  },
  input: {
    height: 57,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#DCDCDC',
    borderRadius: 13,
    paddingHorizontal: 17,
    fontSize: 15,
    color: '#202124',
  },
  /* Button */
  signupButton: {
    height: 58,
    backgroundColor: '#2F8F89',
    borderRadius: 30,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2F8F89',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  arrow: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '700',
    marginLeft: 12,
  },
  loginText: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 14,
    marginTop: 23,
  },
  loginBold: {
    color: '#2F8F89',
    fontWeight: '800',
  },
});
