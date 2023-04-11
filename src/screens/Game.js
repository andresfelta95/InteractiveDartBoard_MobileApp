import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//  If the user starts a game, show the game screen
//  If the user ends a game, show the home screen
export default function Game() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});