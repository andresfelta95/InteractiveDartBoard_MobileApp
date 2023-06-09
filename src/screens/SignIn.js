import * as React from 'react';
import { SafeAreaView, Text, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
// Get the game context
import { GameContext } from '../providers/GameProvider';

export default function SignIn({ navigation }) {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    // Get the game context
    const { game, setGame } = React.useContext(GameContext);

    // create the sign in function
    // function for the sign in button
    function signInBnt() {
        // Send a POST request to the server to validate the user's credentials
        fetch('https://thor.cnt.sast.ca/~kevenlou/mobileToEsp/service.php', {
            method: 'POST',
            headers: {
                'Cookie': 'PHPSESSID=1234567890',
            },
            body: JSON.stringify({
                // The server expects an action, and a username and password
                action: 'login',
                username: username,
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
                setPassword('');
                // Set the game context
                setGame(prevState => ({
                    ...prevState,
                    loggedIn: true,
                    userName: username,
                }));
            } else {
                // If the user is not authenticated, display an error message
                alert("Invalid username or password");
                setUsername('');
                setPassword('');
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sign In Screen</Text>
            <TextInput style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <SafeAreaView style={styles.container2}>
                <TextInput style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry = {!showPassword}
                />
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={togglePassword}
                >
                    <Text style={styles.buttonText}>👁️</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <TouchableOpacity style={styles.button} onPress={() => signInBnt()}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#99F',
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: 200,
        borderColor: '#000',
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
});