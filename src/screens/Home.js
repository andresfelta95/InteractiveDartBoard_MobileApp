import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Account" onPress={() => navigation.navigate('Account')} />
            <Button title="Game" onPress={() => navigation.navigate('Game')} />
            <Button title="Sign Out" onPress={() => navigation.navigate('SignIn')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

