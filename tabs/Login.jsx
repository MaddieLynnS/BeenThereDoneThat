import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
          {/* Two buttons- one for retrieving a saved file, the other for making a new save file */}
          <Text style={styles.text}>
            Enter your username to load your account:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='Current username'
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Posts')}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Don't have an account? 
            Create a new one:
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='Enter new username'
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Posts')}
            >
            <Text style={styles.buttonText}>Create New</Text>
          </TouchableOpacity>

        </SafeAreaView>
    )

}

//Makes a save file for a new person "creating an account", returns name
function NewPerson() {

}

//Searches for existing file with the name input, then loads that file if it exists
function ExistingPerson(username) {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4AB1F7',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF'
  },
  button: {
    backgroundColor: '#E5A900',
    height: 50,
    width: 200,
    marginTop: 30,
    marginBottom: 30,
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