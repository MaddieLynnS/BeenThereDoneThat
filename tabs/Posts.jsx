import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePosts } from '../PostsContext';

//basic Posts page that a new user will see. Will be updated by an existing person's file
export default function PostsScreen() {
    const navigation = useNavigation();
    const { posts } = usePosts();

    return (
        <SafeAreaView style={styles.container}>
            {/* // This button links to the NewPost page, where they can make a post to add that will show up here */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('NewPost')}
                >
                <Text style={styles.buttonText}>Add new post</Text>
            </TouchableOpacity>

            {posts.length === 0 ? (
                <View>
                    <Text style={styles.text}>
                        No posts yet! Click the button to create one!
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.postItem}>
                            <Text style={styles.postTextDate}>{new Date(Number(item.id)).toLocaleDateString()}</Text>
                            <Text style={styles.postText}>{item.text}</Text>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
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
        marginTop: 20,
        margin: 30,
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
    },
    postItem: {
        backgroundColor: '#FFFFFF',
        padding: 12,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderColor: '#4AB1F7',
        borderWidth: 1,
    },
    postText: {
        color: '#333',
        fontSize: 16,
    },
    postTextDate: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 16
    }

})