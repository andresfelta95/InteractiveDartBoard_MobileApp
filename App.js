/**
 *  Interactive Dartboard App
 *  
 * The game will be played physically with a dartboard and darts.
 * A microcontroller will send the location of the dart to a database using a web API.
 * The app will connect to the web API and get the location of the dart.
 * The location will be used to create a shape to allow the user pick the right position.
 * Then the score will be calculated, displayed, and saved to the database.
 * 
 * Additional features:
 * - The user can choose the number of players  (1, 2, 3, 4)
 * - The user can choose the number of rounds (1, 3, 5, 7, 9, 11, 13, 15)
 * - The user can choose the starting score (501, 301, 201, 101)
 * - Each player can choose a name and will be stored in the database to track the scores
 * 
 * 
 * @module App
 * @requires react
 * @requires react-native
 * @requires @react-navigation/native
 * @requires @react-navigation/stack
 * @requires @react-navigation/drawer
 * @requires @react-navigation/bottom-tabs
 * @requires @react-navigation/material-top-tabs
 * @requires @react-navigation/material-bottom-tabs
 * @requires @react-navigation/compat
 * @requires @react-navigation/elements
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';



//  Import the game provider and the game context
import GameProvider, { GameContext } from './src/providers/GameProvider';

export default function App() {
    // return the app
    return (
        <GameProvider>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </SafeAreaProvider>
        </GameProvider>
    );
}
