import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TouchableOpacity } from 'react-native';

export default function NewPostScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Enter the text of your post here:</Text>

            {/* For now, the create new post button just loops back to the Posts page */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    SavePost();
                    navigation.navigate('Posts')}}
                    >
                <Text style={styles.buttonText}>Save Post</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

function SavePost() {
    console.log("OH MY YOU PUSHED THE BUTTON");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4AB1F7',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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