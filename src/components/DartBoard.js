/*
    This component is the dartboard. It is a circle with a radius of 200px.
    It has 20 sections, each with a number from 1 to 20.
    The sections are evenly spaced around the circle.
    The sections are colored red, blue, green, and yellow.
    When a dart is thrown, the game will get a location from the database.
    the bulls-eye is will be the (0,0) coordinate.
    The maximum coordinates will be (20,20) and the minimum coordinates will be (-20,-20).
    When the game get the location, a circle of radius 10px will be drawn at that location.
    The user will be able to click on the circle and pick the exact location from the circle.

*/

// import the React and React Native components
import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// import the dartboard colors
import Colors from '../constants/Colors';

//  Create the DartBoard component
export default function DartBoard(props) {
    // get the width and height of the screen
    const { width, height } = Dimensions.get('window');

    // create the dartboard sections
    const sections = [];
    for (let i = 0; i < 20; i++) {
        // calculate the angle of the section
        const angle = (i * 18) + 9;

        // calculate the x and y coordinates of the section
        const x = Math.cos(angle * Math.PI / 180) * 190;
        const y = Math.sin(angle * Math.PI / 180) * 190;

        // create the section
        sections.push(
            <View key={i} style={[styles.dartboardSection, { transform: [{ rotate: `${angle}deg` }] }]}>
                <Text style={{ color: 'white', fontSize: 20 }}>{i + 1}</Text>
            </View>
        );
    }

    // return the dartboard
    return (
        <View style={styles.container}>
            <View style={styles.dartboard}>
                {sections}
                <View style={styles.dartboardCenter} />
            </View>
        </View>
    );

}



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dartboard: {
        width: 400,
        height: 400,
        borderRadius: 200,
        backgroundColor: Colors.dartboard,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dartboardSection: {
        width: 380,
        height: 380,
        borderRadius: 190,
        backgroundColor: Colors.dartboardSection,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dartboardCenter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.dartboardCenter,
        position: 'absolute',
    },
});
            
