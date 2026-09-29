
import React , {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import {get,ref} from 'firebase/database'
import { database } from './firebase/firebaseConfig';
export default function LoginScreen() {
  const [email ,setemail] = useState('')
  const [password ,setpassword] = useState('')
  const handlelogin =  async () =>
  {
    const snapshot =await  get(ref(database, 'users'))
    const users = snapshot.val() || {};
    const foundUser = Object.values(users).find(
    (user) => {
      const u = user as { email: string; password: string; status :string};
      return u.email === email && u.password === password && u.status =='users' ;
    }
  );
 const foundAdmin = Object.values(users).find(
    (user) => {
      const u = user as { email: string; password: string; status :string};
      return u.email === email && u.password === password && u.status =='admin' ;
    }
  );

    if(foundUser)
    {
      router.push('/home')
    }
    else if(foundAdmin)
    {
      router.push('./admin/admin')
    }
else
{
  alert("Invalid email and password")
}
  }

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* Top Background */}
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Welcome Back!</Text>

        <Text style={styles.headerSubtitle}>
          Login to continue shopping
        </Text>

      </View>

      {/* Login Card */}
      <View style={styles.card}>

        <Text style={styles.title}>Login</Text>

        <Text style={styles.subtitle}>
          Enter your account details below.
        </Text>

        {/* Email */}
        <View style={styles.inputContainer}>

         

          <TextInput
          onChangeText={setemail}
          value={email}
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#A0A0A0"
            keyboardType="email-address"
            autoCapitalize="none"
          />

        </View>

        {/* Password */}
        <View style={styles.inputContainer}>

          

          <TextInput
          onChangeText={setpassword}
          value={password}
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
          />

        </View>

        {/* Forgot Password */}
        <TouchableOpacity
          style={styles.forgotButton}
          activeOpacity={0.7}
        >
          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handlelogin}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>
            Login
          </Text>

          <Text style={styles.arrow}>
            →
          </Text>
        </TouchableOpacity>

        {/* Signup */}
        <TouchableOpacity
          onPress={() => router.push('/signup')}
          activeOpacity={0.7}
        >
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text style={styles.signupBold}>
              Sign Up
            </Text>
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

  /* Header */
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

  /* Card */
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
    fontSize: 29,
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

  /* Forgot Password */
  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: -5,
    marginBottom: 10,
  },

  forgotText: {
    color: '#2F8F89',
    fontSize: 14,
    fontWeight: '700',
  },

  /* Login Button */
  loginButton: {
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

  loginButtonText: {
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

  /* Signup */
  signupText: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 14,
    marginTop: 23,
  },

  signupBold: {
    color: '#2F8F89',
    fontWeight: '800',
  },

});

