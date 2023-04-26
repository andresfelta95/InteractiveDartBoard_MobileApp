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
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

// import the game context
import { GameContext } from '../providers/GameProvider';

// create the home screen
export default function Home({ navigation }) {
    // get the game context
    const { game, setGame } = React.useContext(GameContext);

    // create the home screen
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Interactive Dartboard</Text>
            <Text style={styles.subtitle}>Home Screen</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('GettingAnotherPlayer')}>
                <Image
                    style={styles.image}
                    source={require('../assets/DartBoardIcon.png')}
                />
            </TouchableOpacity>
                
        </SafeAreaView>
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
        // Position the title at the top of the screen
        position: 'absolute',
        top: 100,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    button: {
        // Position the button at the bottom of the screen
        position: 'absolute',
        bottom: 0,
        // Set the button's padding
        padding: 8,
        // Set the button's border radius
        borderRadius: 4,
        // Set the button's margin
        marginBottom: 16,
    },
});

// Path: src\screens\Game.js



