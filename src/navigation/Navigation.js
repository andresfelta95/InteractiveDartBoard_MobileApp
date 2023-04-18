/**
 * This file contains the navigation logic for the Interactive Dartboard app.
 * 
 * It uses the React Navigation library to create a stack of screens.
 * If the user is not logged in, the sign in and sign up screens are shown.
 * If the user is logged in, the home, account, and game screens are shown.
 * 
 * @authors  Andres Tangarife and Keven L
 * @version 1.0
 * @since   2023-04-10
 * 
 */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import the screens
import Home from '../screens/Home';
import Account from '../screens/Account';
import Game from '../screens/Game';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

// create the stack navigator
const Stack = createNativeStackNavigator();

// create the navigation
export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="SignUp" 
                component={SignUp} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Account" 
                component={Account}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Game" 
                component={Game}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

