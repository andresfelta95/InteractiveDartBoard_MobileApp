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
    const { pointsPerDart } = game; // get the points per round from the game context
    const { player1 } = game; // get the player 1 name from the game context
    const { player2 } = game; // get the player 2 name from the game context

    function calclateScore(pointX, pointY) {
        // check if the points are null
        if (pointX == null || pointY == null) {
            return 0;
        }
        // check if the point is in the bullseye
        if (pointX < 0.5 && pointX > -0.5 && pointY < 0.5 && pointY > -0.5) {
            return 50;
        }
        // create the variables
        let score = 0;
        let distance = 0;
        console.log("calclating");
        // calculate the distance
        distance = Math.sqrt(Math.pow(pointX, 2) + Math.pow(pointY, 2));
        console.log(distance);

        //   calculate the angle
        let angle = Math.atan2(pointY, pointX) * (180 / Math.PI);
        if (angle < 0) {
            angle = 360 + angle;
        }
        console.log(angle);

        if (angle < 18 && angle >= 0) {
            score = 6;
        } else if (angle < 36 && angle >= 18) {
            score = 13;
        } else if (angle < 54 && angle >= 36) {
            score = 4;
        } else if (angle < 72 && angle >= 54) {
            score = 18;
        } else if (angle < 90 && angle >= 72) {
            score = 1;
        } else if (angle < 108 && angle >= 90) {
            score = 20;
        } else if (angle < 126 && angle >= 108) {
            score = 5;
        } else if (angle < 144 && angle >= 126) {
            score = 12;
        } else if (angle < 162 && angle >= 144) {
            score = 9;
        } else if (angle < 180 && angle >= 162) {
            score = 14;
        } else if (angle < 198 && angle >= 180) {
            score = 11;
        } else if (angle < 216 && angle >= 198) {
            score = 8;
        } else if (angle < 234 && angle >= 216) {
            score = 16;
        } else if (angle < 252 && angle >= 234) {
            score = 7;
        } else if (angle < 270 && angle >= 252) {
            score = 19;
        } else if (angle < 288 && angle >= 270) {
            score = 3;
        } else if (angle < 306 && angle >= 288) {
            score = 17;
        } else if (angle < 324 && angle >= 306) {
            score = 2;
        } else if (angle < 342 && angle >= 324) {
            score = 15;
        } else if (angle <= 360 && angle >= 342) {
            score = 10;
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
                 fetch('https://thor.cnt.sast.ca/~kevenlou/mobileToEsp/game.php', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'getDarts',
                    gameID: game.gameID,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        console.log('Success:', data.locationX, data.locationY);
                        const score = calclateScore(data.locationX, data.locationY);
                        console.log('point', score);


                        let newDartLocation = [data.locationX, data.locationY]
                        // Add the dart locations to the game context
                        // into the dartLocations: []
                        setGame(prevState => {
                            return {
                                ...prevState,
                                // If the dartLocations array has 3 elements, clear it and store the new dart location
                                dartLocations: prevState.dartLocations.length === 3 ? [newDartLocation] : [...prevState.dartLocations, newDartLocation],
                                // Set the dart count to the length of the dartLocations array
                                dartCount: prevState.dartLocations.length,
                                // depending on the player turn, deduct the score from the player score, if the deduction is less than 0, do not deduct
                                player1Score: prevState.playerTurn === 1 ? (prevState.player1Score - score < 0 ? prevState.player1Score : prevState.player1Score - score) : prevState.player1Score,
                                player2Score: prevState.playerTurn === 2 ? (prevState.player2Score - score < 0 ? prevState.player2Score : prevState.player2Score - score) : prevState.player2Score,
                                // if the dart count is 3, change the player turn
                                playerTurn: prevState.dartCount === 3 ? (prevState.playerTurn === 1 ? 2 : 1) : prevState.playerTurn,
                                pointsPerDart: score,
                            };
                        });
                        // if the dart count is 3, send the score to the server
                        if (game.dartCount === 3) {
                            sendScore();
                        }   

                    } else {
                        console.log('No darts thrown');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }, 1000);

        // Function to calculate send the score to the server
        const sendScore = () => {
            // create the request
            // url = 'https://thor.cnt.sast.ca/~atangari/CMPE2550/Project/esp32Server.php';
            // fetch(url, {

            fetch('https://thor.cnt.sast.ca/~kevenlou/mobileToEsp/game.php', {
                method: 'POST',
                body: JSON.stringify({
                    action: 'getScore',
                    gameID: game.gameID,
                    // depending on the player turn, send the score to the server
                    score: game.playerTurn === 1 ? game.player1Score : game.player2Score,

                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        console.log('Success:', data);
                    } else {
                        console.log('No darts thrown');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

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

