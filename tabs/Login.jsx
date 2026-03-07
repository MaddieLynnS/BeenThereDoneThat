import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePosts } from '../PostsHandler';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    const { loadPosts, resetPosts } = usePosts();

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
            onPress={async () => {
              try {
                await loadPosts(text || 'posts');
                navigation.navigate('Posts');
              } catch (err) {
                Alert.alert('Error', 'Could not load posts for that username');
              }
            }}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Don't have an account? 
            Get started today!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              resetPosts();
              navigation.navigate('Posts');
            }}
            >
            <Text style={styles.buttonText}>Create New</Text>
          </TouchableOpacity>

        </SafeAreaView>
    )

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
    width: 150,
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