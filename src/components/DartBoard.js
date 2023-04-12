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
import { Surface, Shape, Path } from '@react-native-community/art';



// import the components we will need
import { GameContext } from '../providers/GameProvider';

// import the colors
import Colors from '../constants/Colors';

// create the DartBoard component
export default function DartBoard() {
    // get the game context
    const { game, setGame } = React.useContext(GameContext);
    const center = 150; // the center of the dartboard
    const radius = 150; // the radius of the dartboard

    const paths = [
        //  Outher circle
        Path().moveTo(center, center - radius).arc(0, radius * 2, radius).arc(0, radius * -2, radius).close(),

        //  Bullseye
        Path().moveTo(center, center - 10).arc(0, 20, 10).arc(0, 20 * -1, 10).close(),

        //  Triple ring
        Path().moveTo(center, center - radius + 20).arc(0, radius * 2 - 40, radius - 20).arc(0, radius * -2 + 40, radius - 20).close(),

        //  Double ring
        Path().moveTo(center, center - radius + 40).arc(0, radius * 2 - 80, radius - 40).arc(0, radius * -2 + 80, radius - 40).close(),
    ]

    // create the dartboard
    return (
        <View style={styles.container}>
            <Surface width={300} height={300}>
                <Shape d={paths[0]} fill={Colors.dartboard} />
                <Shape d={paths[1]} fill={Colors.dartboardCenter} />
                <Shape d={paths[2]} fill={Colors.dartboardSection} />
                <Shape d={paths[3]} fill={Colors.dartboardSection} />
            </Surface>
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
            
