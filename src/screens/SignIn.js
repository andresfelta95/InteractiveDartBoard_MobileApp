import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SignIn({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Sign In Screen</Text>
            <Button title="Sign In" onPress={() => navigation.navigate('Home')} />
            <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});