import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePosts } from '../PostsHandler';

export default function NewPostScreen() {
    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');
    const { addPost } = usePosts();

  const onSave = () => {
    if (text.trim().length === 0) return;
    addPost(text.trim());
    onChangeText(''); // Clear the input field
  };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Enter the text of your post here:</Text>
            <TextInput
                editable
                multiline
                numberOfLines={5}
                maxLength={400}
        onChangeText={onChangeText}
                value={text}
                style={styles.textInput}
            />

            {/* For now, the create new post button just loops back to the Posts page */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    onSave();
                    navigation.navigate('Posts')}}
                    >
                <Text style={styles.buttonText}>Save Post</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4AB1F7',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    padding: 10,
    width: 300,
    height: 100,
    backgroundColor: '#FFFF',
    borderColor: '#000',
    borderWidth: 1,
    margin: 12,
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