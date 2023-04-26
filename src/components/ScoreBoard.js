/*
 * This component is responsible for displaying the score board and it will be added in the Game screen
 */
// import react
import * as React from 'react';
// import react native components to create the score board
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { TableHTMLAttributes } from 'react';
// import the game context
import { GameContext } from '../providers/GameProvider';

/**
 * This function is responsible for creating the score board
 * it will display:
 * 1. Players names
 * 2. Players current score
 * 3. Poinst per round
 * @returns the score board
 */
function ScoreBoard(){
    // get the game context
    const { game, setGame } = React.useContext(GameContext);
    // get the players
    const { player1, player2 } = game;
    // get the scores
    const { player1Score, player2Score } = game;
    // get the points per round from the server
    const { pointsPerRound } = game;
    // get the player turn
    const { playerTurn } = game;
    // get the dart locations
    const { dartLocations } = game;
    // get the dart count
    const { dartCount } = game;

    // create the score board
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Score Board</Text>
            <Text style={styles.subtitle}>{player1}</Text>
            <Text style={styles.subtitle}>{player2}</Text>
            <Text style={styles.subtitle}>{player1Score}</Text>
            <Text style={styles.subtitle}>{player2Score}</Text>
            <Text style={styles.subtitle}>{pointsPerRound}</Text>
            <Text style={styles.subtitle}>{playerTurn}</Text>
            <Text style={styles.subtitle}>{dartLocations}</Text>
            <Text style={styles.subtitle}>{dartCount}</Text>
        </SafeAreaView>
    );
}

// create the styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
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

// export the score board
export default ScoreBoard;