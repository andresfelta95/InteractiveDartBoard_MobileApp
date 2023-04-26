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
        <SafeAreaView style={styles.Table}>
            <Text style={styles.title}>Score Board</Text>
            <Text style={styles.title}>Player Turn: {playerTurn}</Text>
            <SafeAreaView style={styles.Header}>
                <Text style={styles.Cell}>Player</Text>
                <Text style={styles.Cell}>Score</Text>
                <Text style={styles.Cell}>Points Per Round</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.Row}>
                <Text style={styles.Cell}>{player1}</Text>
                <Text style={styles.Cell}>{player1Score}</Text>
                {/* if player two turn show 0 */}
                <Text style={styles.Cell}>{playerTurn == 2 ? 0 : pointsPerRound}</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.Row}>
                <Text style={styles.Cell}>{player2}</Text>
                <Text style={styles.Cell}>{player2Score}</Text>
                {/* if player one turn show 0 */}
                <Text style={styles.Cell}>{playerTurn == 1 ? 0 : pointsPerRound}</Text>
            </SafeAreaView>
        </SafeAreaView>
    );
}

// create the styles
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    Table: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    Header: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
    },
    Row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
    },
    Cell: {
        flex: 1,
        // Ensure the background color spans inside of the border
        backgroundColor: 'beige',
        // Set the border width
        borderWidth: 1,
        // Set the border color transparent so you can see the background color through the border
        borderColor: '#000',
        // Set the border Radius
        borderRadius: 20,
        // Set the padding
        padding: 50,
        // Set the margin
        margin: 10,
        // Set the text alignment
        textAlign: 'center',
    },
});

// export the score board
export default ScoreBoard;