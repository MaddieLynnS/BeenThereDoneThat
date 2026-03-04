import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';

export default function App() {
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

      {/* <Button>Get Started</Button> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC83D',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200
  },
  text: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
