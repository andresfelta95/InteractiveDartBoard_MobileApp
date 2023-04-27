import * as React from 'react';
import { Text, SafeAreaView, StyleSheet, Button, TextInput } from 'react-native';
import { GameContext } from '../providers/GameProvider';


export default function GettingAnotherPlayer({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [username2, setUsername2] = React.useState('');
    // Get the game context
    const { game, setGame } = React.useContext(GameContext);
    // Get the state of the game
    const { loggedIn, userName } = game;
    // Function to create a new game in the server
    async function AddPlayer() {
        // create the request
        
        //url = 'https://thor.cnt.sast.ca/~atangari/CMPE2550/Project/esp32Server.php';
        //const response = await fetch(url, {
        const response = await fetch('https://thor.cnt.sast.ca/~kevenlou/mobileToEsp/game.php', {
            method: 'POST',
            body: JSON.stringify({
                action: 'addingSecondPlayer',
                username: username2,
            }),
        });

        // get the response
        const data = await response.json();
        // Display the response in a popup    
        console.log(data);

        if(data.success){
            //  Set the game context
            setGame(prevState => ({
                ...prevState,
                loggedIn: true,
                dartCount: 0,
                player1Score: 301,
                player2Score: 301,
                player1: userName,
                player2: username2,
                pointsPerDart: 0,
            }));
                
            navigation.navigate('Game');

            
        }else if(data.failed){
            alert(data.message);
        }
    }

    return (
        <SafeAreaView stryle={styles.container}>
            <Text style={styles.title}>Player 1</Text>
            <TextInput
                style={styles.input}
                placeholder={userName}
                //value={route.params.username}
                editable={false}
             />

            <Text style={styles.title}>Player 2</Text>
            <TextInput
                style={styles.input}
                placeholder="Player 2"
                value={username2}
                onChangeText={setUsername2}
             />
            
            <Button 
                style={styles.button}
                title="Add Player" 
                onPress={() => AddPlayer()} 
            />
            <Button title="Create Player" onPress={() => navigation.navigate('CreatingSecondPlayer')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#000',
        padding: 8,
        borderRadius: 4,
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
    },
    link: {
        color: '#0000EE',
    },
});