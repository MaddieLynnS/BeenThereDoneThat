import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList, Modal, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePosts } from '../PostsHandler';

//basic Posts page that a new user will see. Will be updated by an existing person's file
export default function PostsScreen() {
    const navigation = useNavigation();
    const { posts, savePosts } = usePosts();
    const [modalVisible, setModalVisible] = React.useState(false);
    const [username, setUsername] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>

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
                    contentContainerStyle={{ paddingBottom: 140 }}
                />
            )}

            {/* Floating Add button fixed to bottom-left */}
            <TouchableOpacity
                style={[styles.button, styles.fab]}
                onPress={() => navigation.navigate('NewPost')}
            >
                <Text style={styles.buttonText}>Add new post</Text>
            </TouchableOpacity>

            {/* Floating Save button fixed to bottom-right opens modal */}
            <TouchableOpacity
                style={[styles.button, styles.otherfab]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Save posts</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Save posts</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter username"
                            value={username}
                            onChangeText={setUsername}
                        />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity
                                style={[styles.button, { margin: 8, width: 100 }]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, { margin: 8, width: 100 }]}
                                onPress={async () => {
                                    try {
                                        const path = await savePosts(username || 'posts');
                                        setModalVisible(false);
                                        setUsername('');
                                        Alert.alert('Saved', `Posts saved to ${path}`);
                                    } catch (err) {
                                        Alert.alert('Error', err.message || 'Failed to save');
                                    }
                                }}
                            >
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
        margin: 0,
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
    },
    fab: {
        position: 'absolute',
        left: 16,
        bottom: 50,
        width: 160,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Android elevation
        elevation: 6,
        zIndex: 10,
    },
    otherfab: {
        backgroundColor: '#4AB1F7',
        position: 'absolute',
        right: 16,
        bottom: 50,
        width: 160,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Android elevation
        elevation: 6,
        zIndex: 10,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8
    },
    modalInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 6
    }
});