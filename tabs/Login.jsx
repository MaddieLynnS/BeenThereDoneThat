import {useNavigation} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';

export default function LoginScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

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
});