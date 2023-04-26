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
import { SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
// GameProvider
import { GameContext } from '../providers/GameProvider';

// create the dartboard component
export default function DartBoard(props) {
    // create the state to hold the coordinates of the circles
    const [circleCoords, setCircleCoords] = React.useState([]);
    // create the state to hold the game state
    const { game, setGame } = React.useContext(GameContext);
    // Get the game state from the context
    const { dartLocations } = game;
    console.log(dartLocations);

    // Effect to update get the dart locations from the state and update the circleCoords
    React.useEffect(() => {
        // create the array to hold the circle coordinates
        let newCircleCoords = [];
        // check if the dartLocations is not empty
        if (dartLocations.length > 0) 
        {
            // loop through the dartLocations
            for (let i = 0; i < dartLocations.length; i++) {
                // get the dartLocation
                const dartLocation = dartLocations[i];
                // get the x and y coordinates
                const x = dartLocation[0];
                const y = dartLocation[1];
                // if the x and y are not null
                if (x !== null && y !== null) {
                    // transform the coordinates to mobile
                    const mobileCoords = coordinateTransformEspToMobile(x, y);
                    // add the coordinates to the newCircleCoords
                    newCircleCoords.push({ x: mobileCoords[0], y: mobileCoords[1] });
                }
                else {
                    // add the coordinates to the newCircleCoords
                    newCircleCoords.push({ x: 0, y: 0 });
                }
            }
        }
        // update the circleCoords
        setCircleCoords(newCircleCoords);
    }, [dartLocations]);

    // create the state to hold the coordinates of the circles
    const handlePress = (event) => {
        // get the location of the press
        const { locationX, locationY } = event.nativeEvent;
        // add the location to the circleCoords
        setCircleCoords([...circleCoords, { x: locationX, y: locationY }]);
        coordinateTransformMobileToEsp(locationX, locationY);
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

// Transforming the app daa to the esp32
function coordinateTransformMobileToEsp(locationX, locationY)
{
    console.log("mobile X : " + locationX + " mobile Y : " + locationY);

    // subtrack the location from the origin then divide it from the scale 
    espX = ((locationX - 200) / 145.5) * 19;
    espY = -((locationY - 200) / 145.5) * 19;

    console.log("esp X : " + espX + " esp Y : " + espY); 
}

//  Transforming the esp32 data to the app
function coordinateTransformEspToMobile(locationX, locationY)
{
    console.log("esp X : " + locationX + " esp Y : " + locationY);
    
    // mutiply the location from the esp by a scale of 10 then add the origin  
    mobileX = ((locationX / 19) * 145.5) + 200;
    moblieY = -((locationY / 19) * 145.5) + 200;

    console.log("mobile X : " + mobileX + " mobile Y : " + moblieY);

    return [mobileX, moblieY]
}

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
        height: 400,
        width: 400,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: 'blue',
        position: 'absolute',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
    },
});

