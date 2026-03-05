import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//basic Posts page that a new user will see. Will be updated by an existing person's file
export default function PostsScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            {/* // This button links to the NewPost page, where they can make a post to add that will show up here */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('NewPost')}
                >
                <Text style={styles.buttonText}>Add new post</Text>
            </TouchableOpacity>

            {/* //All previous posts will be displayed hereafter. If no posts, prompt to create one */}
            <View>
                <Text style={styles.text}>
                    No posts yet! Click the button to create one!
                </Text>
            </View>
        </SafeAreaView>
    )
 
}

//Hopefully will get any posts from the file. If there aren't any, just return generic text?
//Nah we'll probably need another function that can iterate through "file" and for every post, determine how to display it
function GetDisplay() {
    return (
        <Text style={styles.text}>
            No posts yet! Click the button to create one!
        </Text>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#4AB1F7',
    fontSize: 20,
    textAlign: 'center'
  }

})