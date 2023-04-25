/**
 *  Home Screen of the Interactive Dartboard App
 * 
 * Author: Andres Tangarife - Keven L
 * Date: 2023-04-10
 * 
 * This screen is the home screen of the app. 
 * It will show the user's name, its games, and the option to create a new game.
 * If they create a new game, it will take them to the Game screen.
 * 
 */
import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

// import the game context
import { GameContext } from '../providers/GameProvider';
// import { TextInput } from 'react-native-web';

// create the home screen
export default function Home({ navigation }) {
    // get the game context
    const { game, setGame } = React.useContext(GameContext);

    // Function to create a new game in the server
    async function newGame() {
        // create the request
        
        url = 'https://thor.cnt.sast.ca/~atangari/CMPE2550/Project/esp32Server.php';
        const response = await fetch('https://thor.cnt.sast.ca/~kevenlou/mobileToEsp/game.php', {
        //const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'newGame',
            }),
        });

        // get the response
        const data = await response.json();
        // Display the response in a popup
        alert(JSON.stringify(data));
        console.log(data);

        // set the game context
        // setGame(data);
        
        // navigate to the game screen
        navigation.navigate('Game');
    }

    // create the home screen
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} 
                placeholder="ReadOnly"
                value={"Readyonly"}
             />
            <Text style={styles.title}>Interactive Dartboard</Text>
            <Text style={styles.subtitle}>Home Screen</Text>
            
            <Button title="New Game" onPress={() => navigation.navigate('GettingAnotherPlayer')} />
            <Button title="Server Test" onPress={() => postRequest()} />
        </View>
    );
}

// function to do a post request to the server
async function postRequest() {
    // create the request
    const response = await fetch('https://thor.cnt.sast.ca/~kevenlou/distance/distance.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            valueX : 1,
            valueY : 15,
        }),
    });

    // get the response
    const data = await response.json();
    // Display the response in a popup
    alert(JSON.stringify(data));
    console.log(data);
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'normal',
    },
});

// Path: src\screens\Game.js



