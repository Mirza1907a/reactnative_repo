
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
  return (
    <View style={styles.container}>

      {/* Main Content */}
      <View style={styles.content}>

        {/* Perfume Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/perfume.webp')}
            style={styles.image}
          />
        </View>

        {/* App Name */}
        <Text style={styles.title}>
          Perfume Hub
        </Text>

        <Text style={styles.subtitle}>
          Discover Your Signature Scent
        </Text>

        <Text style={styles.description}>
          Explore a beautiful collection of fragrances
          carefully selected to match your style,
          personality and every special moment.
        </Text>

      </View>

      {/* Bottom Section */}
      <View style={styles.bottom}>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => router.push('/signup')}
        >
          <Text style={styles.buttonText}>
            Get Started
          </Text>

          <Text style={styles.arrow}>
            →
          </Text>
        </TouchableOpacity>

        <Text style={styles.bottomText}>
          Elegance • Style • Fragrance
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EAF7F6',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    paddingTop: 70,
    paddingBottom: 45,
  },

  content: {
    alignItems: 'center',
  },

  imageContainer: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',

    shadowColor: '#2F8F89',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 8,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#202124',
    marginTop: 28,
  },

  subtitle: {
    fontSize: 16,
    color: '#2F8F89',
    fontWeight: '700',
    marginTop: 8,
    textAlign: 'center',
  },

  description: {
    fontSize: 15,
    color: '#777777',
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 22,
    paddingHorizontal: 15,
  },

  bottom: {
    alignItems: 'center',
  },

  button: {
    width: '85%',
    height: 58,
    borderRadius: 30,

    backgroundColor: '#2F8F89',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#2F8F89',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },

  buttonText: {
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

  bottomText: {
    color: '#999999',
    fontSize: 12,
    marginTop: 18,
  },

});
