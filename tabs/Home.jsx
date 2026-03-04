import { StatusBar } from 'expo-status-bar';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
        <Image
            source={require('../assets/favicon.png')}
            style={styles.image}
            resizeMode="contain"
        />
        <Text style={styles.text}>
            Welcome to Been There, Done That:</Text>
        <Text style={styles.text}>
            The simplest digital journal app
        </Text>

        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        >
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
        </SafeAreaView>
    );
}

// navigation.navigate('Profile', {name: 'Jane'})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4AB1F7',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 65,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    // Android shadow
    elevation: 50,
  },
  button: {
    backgroundColor: '#E5A900',
    height: 50,
    width: 200,
    marginTop: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 50
  },
  text: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
