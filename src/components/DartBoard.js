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
import { SafeAreaView, Image, StyleSheet } from 'react-native';

// create the dartboard component
export default function DartBoard() {
    // render the dartboard
    return rederDartBoard();
}



//  Function to render the dartboard
function rederDartBoard() {
    // create the dartboard
    return (
        <SafeAreaView >
            <Image
                style={styles.image}
                source={require('../assets/dartboard.png')}
            />
        </SafeAreaView>
    );
}

// create the styles
const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400,
    },
});

