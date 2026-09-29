import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { router } from 'expo-router';

export default function HomeScreen() {
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


      <View style={styles.mainbox}>

        <View style={styles.boxone}>

          <Image
            source={require('../../assets/images/perfume.webp')}
            style={styles.image}
          />

          <Text style={styles.maintext}>
            Perfume
          </Text>

          <Text style={styles.subtext}>
            Explore a beautiful collection of fragrances
            carefully selected to match your style,
            personality and every special moment.
          </Text>

          <TouchableOpacity
            style={styles.readButton}
            onPress={() => router.push('/perfumedetails')}
          >
            <Text style={styles.readButtonText}>
              Read More
            </Text>
          </TouchableOpacity>

        </View>


        <View style={styles.boxtwo}>

        </View>

      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  scrollView: {
    flex: 1,
    backgroundColor: '#F4FBFA',
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

  /* Products */
  mainbox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    paddingHorizontal: 10,
  },
  boxone: {
    width: '44%',
    minHeight: 450,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    paddingBottom: 15,
  },
  boxtwo: {
    width: '44%',
    minHeight: 450,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  image: {
    width: '100%',
    height: 230,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  maintext: {
    textAlign: 'center',
    paddingTop: 12,
    fontSize: 24,
    fontWeight: '700',
    color: '#244B49',
  },
  subtext: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 19,
    color: '#666666',
  },

  readButton: {
    backgroundColor: '#6EC6C0',
    marginHorizontal: 20,
    marginTop: 5,
    paddingVertical: 11,
    borderRadius: 20,
    alignItems: 'center',
  },

  readButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

});