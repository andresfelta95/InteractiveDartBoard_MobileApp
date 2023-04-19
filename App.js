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
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { SafeAreaProvider} from 'react-native-safe-area-context';

const AuthContext = React.createContext();



//  Import the game provider and the game context
import GameProvider, { GameContext } from './src/providers/GameProvider';

export default function App() {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
          switch (action.type) {
            case 'RESTORE_TOKEN':
              return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
              };
            case 'SIGN_IN':
              return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
              };
            case 'SIGN_OUT':
              return {
                ...prevState,
                isSignout: true,
                userToken: null,
              };
          }
        },
        {
          isLoading: true,
          isSignout: false,
          userToken: null,
        }
      );

      React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
          let userToken;
    
          try {
            userToken = await SecureStore.getItemAsync('userToken');
          } catch (e) {
            // Restoring token failed
            console.log(e);
          }
    
          // After restoring token, we may need to validate it in production apps
    
          // This will switch to the App screen or Auth screen and this loading
          // screen will be unmounted and thrown away.
          dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };
    
        bootstrapAsync();
      }, []);
    
      const authContext = React.useMemo(
        () => ({
          signIn: async (data) => {
            // In a production app, we need to send some data (usually username, password) to server and get a token
            // We will also need to handle errors if sign in failed
            // After getting token, we need to persist the token using `SecureStore`
            // In the example, we'll use a dummy token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
          signOut: () => dispatch({ type: 'SIGN_OUT' }),
          signUp: async (data) => {
            // In a production app, we need to send user data to server and get a token
            // We will also need to handle errors if sign up failed
            // After getting token, we need to persist the token using `SecureStore`
            // In the example, we'll use a dummy token
    
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          },
        }),
        []
      );
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
