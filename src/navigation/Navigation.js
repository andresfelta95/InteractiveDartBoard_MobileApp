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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

// import the screens
import Home from '../screens/Home';
import Account from '../screens/Account';
import Game from '../screens/Game';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

// create the navigator constants
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// create the navigation
export default function Navigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Group>
                <Stack.Screen 
                    name="SignIn" 
                    component={SignIn}
                />
                <Stack.Screen 
                    name="SignUp" 
                    component={SignUp} 
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name=""
                >
                    {() => (
                        <Tab.Navigator>
                            <Tab.Screen
                                name="Home"
                                component={Home}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <Tab.Screen 
                                name="Account" 
                                component={Account}
                                options={{
                                    headerShown: false,
                                }}
                            />
                        </Tab.Navigator>
                    )}
                </Stack.Screen>
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen 
                    name="Game" 
                    component={Game}
                    options={{
                        headerTitle: '',
                        headerStyle: {
                            backgroundColor: 'green',
                        },
                    }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

