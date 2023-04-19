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
        coordinateTransformMobileToEsp(locationX, locationY);
        //test data 
        let test1 = coordinateTransformEspToMobile(2, -4);
        // setCircleCoords([...circleCoords, { x: test1[0], y: test1[1] }]);
        // let test2 = coordinateTransformEspToMobile(3, 5);
        // // setCircleCoords([...circleCoords, { x: test2[0], y: test2[1] }]);
        // let test3 = coordinateTransformEspToMobile(-13, -5);
        // // setCircleCoords([...circleCoords, { x: test3[0], y: test3[1] }]);
        // let test4 = coordinateTransformEspToMobile(-5, 17);
        // // setCircleCoords([...circleCoords, { x: test4[0], y: test4[1] }]);
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
function convertCoordinates(x, y) {
    // convert physical dartboard coordinates to cartesian coordinates
    const cx = x - 0;
    const cy = 0 - y;
  
    // calculate cartesian coordinates with respect to radius
    const r = 19;
    const fx = (cx / r) * 145.5;
    const fy = (cy / r) * 145.5;
  
    // translate image coordinates to center
    const ix = fx + 200;
    const iy = fy + 200;
  
    // return image coordinates
    // return { x: ix, y: iy };
    console.log("x: " + ix + " y: " + iy);
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

