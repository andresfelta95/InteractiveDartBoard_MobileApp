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
function ScoreBoard(props){
    const { players, scores } = props;
    // create the score board
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Score Board</Text>
            <Text style={styles.subtitle}>Players</Text>
            <Text style={styles.subtitle}>Scores</Text>
            <Text style={styles.subtitle}>Points per round</Text>
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