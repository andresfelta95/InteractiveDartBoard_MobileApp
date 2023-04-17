/**
 * This is the game screen for the Interactive Dartboard app.
 * This screen will appear when the user starts a game.
 * It will show the dartboard and the score of each player.
 * It will also show the current player and the current round.
 * 
 * Additionally, this screen will keep contacting the server to obtain the dars locations.
 * Allowing each player to pick the right location on the dartboard.
 * 
 */

// import react
import * as React from 'react';
import { SafeAreaView } from 'react-native';

// import react native components
import { View, Text, Button, StyleSheet } from 'react-native';

// import the dartboard component
import DartBoard from '../components/DartBoard';

// import the game context
import { GameContext } from '../providers/GameProvider';

// create the styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

// create the game screen
function Game() {
    // get the game context
    const { game, setGame } = React.useContext(GameContext);

    // create the game screen
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Interactive Dartboard</Text>
            <Text style={styles.subtitle}>Game Screen</Text>
            <DartBoard />
        </SafeAreaView>
    );
}

// export the game screen
export default Game;

