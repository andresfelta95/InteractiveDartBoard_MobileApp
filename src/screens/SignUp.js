import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function SignUp({ navigation }) {

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    function signUpBnt(){
        // Send a POST request to the server to validate the user's credentials
            fetch('https://thor.cnt.sast.ca/~kevenlou/mobileToEsp/service.php', {
                method: 'POST',
                body: JSON.stringify({
                    // The server expects an action, and a username and password
                    action: 'register',
                    username: username,
                    email: email,
                    password: password,
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    // If the user is authenticated, navigate to the home screen
                    navigation.navigate('Home');
                    setUsername('');
                    setEmail('');
                    setPassword('');
                } else {
                    // If the user is not authenticated, display an error message
                    alert("Invalid username or password or Email");
                    setUsername('');
                    setEmail('');
                    setPassword('');
                }
            })
            .catch((error) => {
                console.error(error);
            });
        };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput style={styles.input} 
                placeholder="Username" 
                value={username}
                onChangeText={setUsername}
            />
            <TextInput style={styles.input} 
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
             />
            <TextInput style={styles.input} 
                placeholder="Password"
                value={password} 
                onChangeText={setPassword}
                secureTextEntry = {!showPassword}
            />
            <TouchableOpacity style={styles.button} onPress={() => signUpBnt()}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.link}>Already have an account? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#000',
        padding: 8,
        borderRadius: 4,
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
    },
    link: {
        color: '#0000EE',
    },
});