import * as React from 'react';
import { SafeAreaView, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function SignIn({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { signIn } = React.useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <Text>Sign In Screen</Text>
            <TextInput 
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign In" onPress={() => navigation.navigate('Home')} />
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </SafeAreaView>
    );
}


// function for the sign in button
function signInBnt() {
    // get the username and password
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;

    // make the request
    fetch('https://thor.cnt.sast.ca/~kevenlou/distance/distance.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then((response) => response.json())
    .then((data) => {
        // if the user is authenticated
        if (data.authenticated) {
            // navigate to the home screen
            navigation.navigate('Home');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});