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
    const { dartLocations } = game; // get the dart locations from the game context

    // keep contacting the server to get the dart locations
    React.useEffect(() => {
        // create the interval
        const interval = setInterval(() => {
            // create the request
            url = 'https://thor.cnt.sast.ca/~atangari/CMPE2550/Project/esp32Server.php';
            // fetch('https://thor.cnt.sast.ca/~kevenlou/distance/distance.php', {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action: 'getDarts',
                    gameID: game.gameID,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data.dartLocation.x, data.dartLocation.y);
                    let newDartLocation = [data.dartLocation.x, data.dartLocation.y]
                    // Add the dart locations to the game context
                    // into the dartLocations: []
                    setGame(prevState => {
                        return {
                            ...prevState,
                            // If the dartLocations array has 3 elements, clear it and store the new dart location
                            dartLocations: prevState.dartLocations.length === 3 ? [newDartLocation] : [...prevState.dartLocations, newDartLocation],
                        };
                    });
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }, 1000);

        // clear the interval
        return () => clearInterval(interval);
    }, []);
    
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

