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
import react from 'react';

// import the point system // import the point system 
import { calclateScore } from '../constants/Constants';

// create the game screen
function Game() {
    const insets = useSafeAreaInsets();
    // get the game context
    const { game, setGame } = React.useContext(GameContext);
    const { dartLocations } = game; // get the dart locations from the game context
    const { dartCount } = game; // get the dart count from the game context
    const { playerTurn } = game; // get the player turn from the game context
    const { player1Score } = game; // get the player 1 score from the game context
    const { player2Score } = game; // get the player 2 score from the game context
    const { pointsPerRound } = game; // get the points per round from the game context
    const { player1 } = game; // get the player 1 name from the game context
    const { player2 } = game; // get the player 2 name from the game context

    function calclateScore(pointX, pointY) {
        let score = 0;
        let distance = 0;
        console.log("calclating");
        // using Pythagoras formula to calculate the distance to the centre.
        distance = Math.sqrt(Math.pow(pointX, 2) + Math.pow(pointY, 2));
        console.log(distance);

        //   #Use SOCATOA to calculate the angle matching the arrow position
        let angle = Math.atan2(pointX, pointY) * (180 / Math.PI);
        if (angle < 0) {
            angle += 360
        }
        console.log(angle);

        if (angle < 9) {
            score = 6;
        } else if (angle < 27 && angle >= 9) {
            score = 13;
        } else if (angle < 45 && angle >= 27) {
            score = 4;
        } else if (angle < 63 && angle >= 45) {
            score = 18;
        } else if (angle < 81 && angle >= 63) {
            score = 1;
        } else if (angle < 99 && angle >= 81) {
            score = 20;
        } else if (angle < 117 && angle >= 99) {
            score = 5;
        } else if (angle < 135 && angle >= 117) {
            score = 12;
        } else if (angle < 153 && angle >= 135) {
            score = 9;
        } else if (angle < 171 && angle >= 153) {
            score = 14;
        } else if (angle < 189 && angle >= 171) {
            score = 11;
        } else if (angle < 207 && angle >= 189) {
            score = 8;
        } else if (angle < 225 && angle >= 207) {
            score = 16;
        } else if (angle < 243 && angle >= 225) {
            score = 7;
        } else if (angle < 261 && angle >= 243) {
            score = 19;
        } else if (angle < 279 && angle >= 261) {
            score = 3;
        } else if (angle < 297 && angle >= 279) {
            score = 17;
        } else if (angle < 315 && angle >= 297) {
            score = 2;
        } else if (angle < 333 && angle >= 315) {
            score = 15;
        } else if (angle < 351 && angle >= 333) {
            score = 10;
        } else if (angle < 360 && angle >= 351) {
            score = 6;
        }


        if (distance > 0 && distance < 1) {
            score = 50;
        } else if (distance > 1 && distance < 2.5) {
            score = 25;
        } else if (distance > 7 && distance < 8.5) {
            score = score * 3;
        } else if (distance > 13 && distance < 14.6) {
            score = score * 2;
        } else if (distance > 14.6) {
            score = 0;
        }
        console.log(score);
        return score;
    }
    // keep contacting the server to get the dart locations
    React.useEffect(() => {
        // create the interval
        const interval = setInterval(() => {
            // create the request
            // url = 'https://thor.cnt.sast.ca/~atangari/CMPE2550/Project/esp32Server.php';
            // fetch(url, {
                 fetch('https://thor.cnt.sast.ca/~kevenlou/distance/game.php', {
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
                    const score = calclateScore(data.dartLocation.x, data.dartLocation.y);
                    console.log('point', score);


                    let newDartLocation = [data.dartLocation.x, data.dartLocation.y]
                    // Add the dart locations to the game context
                    // into the dartLocations: []
                    setGame(prevState => {
                        return {
                            ...prevState,
                            // If the dartLocations array has 3 elements, clear it and store the new dart location
                            dartLocations: prevState.dartLocations.length === 3 ? [newDartLocation] : [...prevState.dartLocations, newDartLocation],
                            // Set the dart count to the length of the dartLocations array
                            dartCount: prevState.dartLocations.length,
                            // depending on the dart count, set the player score
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

