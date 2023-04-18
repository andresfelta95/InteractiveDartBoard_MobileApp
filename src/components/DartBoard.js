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
import { SafeAreaView, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

// create the dartboard component
export default function DartBoard() {
    // create the state to hold the coordinates of the circles
    const [circleCoords, setCircleCoords] = React.useState([]);

    // create the state to hold the coordinates of the circles
    const handlePress = (event) => {
        // get the location of the press
        const { locationX, locationY } = event.nativeEvent;
        // add the location to the circleCoords
        setCircleCoords([...circleCoords, { x: locationX, y: locationY }]);
    };

    // create the state to long press
    const handleLongPress = (event) => {
        // get the location of the press
        setCircleCoords([]);
    };


    // render the dartboard
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
                style={styles.touchable}
                onPress={handlePress} 
                onLongPress={handleLongPress}
            >
                <Image
                    style={styles.image}
                    source={require('../assets/dartboard.png')}
                />
                <SafeAreaView style={styles.overlay}>
                    {circleCoords.map((circleCoord, index) => (
                        console.log(circleCoord),
                        <SafeAreaView
                            key={index}
                            style={[styles.circle, { left: circleCoord.x, top: circleCoord.y }]}
                        />
                    ))}
                </SafeAreaView>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

//  Function to transform the coordinates on app to the coordinates on the dartboard
/*
 * Bullseye: (0,0) -> (200,200)
 *  
*/



// create the styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 400,
        height: 400,
    },
    touchable: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 390,
        width: 390,
    },
    circle: {
        width: 5,
        height: 5,
        borderRadius: 10,
        backgroundColor: 'blue',
        position: 'absolute',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
    },
});

