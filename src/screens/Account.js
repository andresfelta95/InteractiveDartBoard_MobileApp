import * as React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function Account({navigation}) {

    function signOutBnt(){
        // Send a POST request to the server to validate the user's credentials
        fetch('https://thor.cnt.sast.ca/~kevenlou/mobileToEsp/service.php', {
            method: 'POST',
            body: JSON.stringify({
                // The server expects an action, and a logout
                action: 'logout',
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.success) {
                // If the user is authenticated, navigate to the home screen
                navigation.navigate('SignIn');
            } else {
                // If the user is not authenticated, display an error message
                alert("Logout unsuccessful");
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Screen</Text>

            <TouchableOpacity style={styles.button} onPress={() => signOutBnt()}>
                <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
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