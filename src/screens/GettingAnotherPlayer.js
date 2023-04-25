import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';


export default function GettingAnotherPlayer({ navigation }) {
    const [username, setUsername] = React.useState('');
    // Function to create a new game in the server
    async function AddPlayer() {
        // create the request
        
        //url = 'https://thor.cnt.sast.ca/~atangari/CMPE2550/Project/esp32Server.php';
        const response = await fetch('https://thor.cnt.sast.ca/~kevenlou/mobileToEsp/game.php', {
        //const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'addingSecondPlayer',
                username: username,
            }),
        });

        // get the response
        const data = await response.json();
        // Display the response in a popup    
        console.log(data);

        if(data.success){
            navigation.navigate('Game');
            
        }else if(data.failed){
            alert(data.message);
        }
    }

    async function CreatingSecondPlayer() {
        
        navigation.navigate('CreatingSecondPlayer');
    }

    return (
        <View>
            <Text>Player 1</Text>
            <TextInput 
                placeholder="Player 1"
                //value={route.params.username}
                editable={false}
             />

            <Text>Player 2</Text>
            <TextInput 
                placeholder="Player 2"
                value={username}
                onChangeText={setUsername}
             />
            
            <Button title="Add Player" onPress={() => AddPlayer()} />
            <Button title="Create Player" onPress={() => CreatingSecondPlayer()} />
        </View>
    );
}