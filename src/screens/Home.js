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
import { Text, View, StyleSheet, Button } from 'react-native';

// import the game context
import { GameContext } from '../providers/GameProvider';

// create the home screen
export default function Home({ navigation }) {
    // get the game context
    const { game, setGame } = React.useContext(GameContext);

    // create the home screen
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Interactive Dartboard</Text>
            <Text style={styles.subtitle}>Home Screen</Text>
            <Button title="Create Game" onPress={() => navigation.navigate('Game')} />
        </View>
    );
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



