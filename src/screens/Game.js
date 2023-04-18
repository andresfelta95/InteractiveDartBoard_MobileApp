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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import react native components
import { View, Text, Button, StyleSheet } from 'react-native';

// import the components
import DartBoard from '../components/DartBoard';
import ScoreBoard from '../components/ScoreBoard';

// import the game context
import { GameContext } from '../providers/GameProvider';


// create the game screen
function Game() {
    const insets = useSafeAreaInsets();
    // get the game context
    const { game, setGame } = React.useContext(GameContext);
    
    // create the game screen
    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            backgroundColor: 'green',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Text style={styles.title}>Interactive Dartboard</Text>
            <Text style={styles.subtitle}>Game Screen</Text>
            <DartBoard />
            <ScoreBoard />
        </SafeAreaView>
    );
}


// create the styles
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
// export the game screen
export default Game;

