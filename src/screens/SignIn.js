import * as React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

export default function SignIn({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Sign In Screen</Text>
            <Button title="Sign In" onPress={() => navigation.navigate('Home')} />
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </SafeAreaView>
    );
}


// function for the sign in button
function signInBnt() {}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});