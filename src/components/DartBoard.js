/*
    This component is the dartboard. It is a circle that will cover the screen size
    It has 20 sections, each with a number from 1 to 20.
    The sections are evenly spaced around the circle.
    The sections are colored red, blue, green, and yellow.
    When a dart is thrown, the game will get a location from the database.
    the bulls-eye is will be the (0,0) coordinate.
    The maximum coordinates will be (20,20) and the minimum coordinates will be (-20,-20).
    When the game get the location, a circle of radius 10px will be drawn at that location.
    The user will be able to click on the circle and pick the exact location from the circle.

*/
// import react
import * as React from 'react';
// import react native components
import { View, Text, Button, StyleSheet } from 'react-native';

// import the dartboard components
import Bullseye from './BullsEye';
import TripleRing from './TripleRing';
import DoubleRing from './DoubleRing';
import OuterRing from './OutherRign';

// create the DartBoard component
function DartBoard() {
    // create the dartboard
    return (
        <View style={styles.container}>
            <Bullseye />
            <TripleRing />
            <DoubleRing />
            <OuterRing />
        </View>
    );
}

// create the styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
});

// export the DartBoard component
export default DartBoard;
