/**
 *  Here we are going to create a new context
 * and a new provider. This will allow us to
 * share the game state between components.
 * 
 * 1. Create a new context
 * 2. Create a new provider
 * 3. Export the provider
 * 4. Import the provider into App.js
 * 5. Wrap the navigation in the provider
 * 6. Import the context into the Home screen
 * 7. Get the game state from the context
 * 8. Import the context into the DartBoard component
 * 9. Get the game state from the context
 * 10. Import the context into the ScoreBoard component
 * 11. Get the game state from the context
 */

import * as React from 'react';

// create the context
export const GameContext = React.createContext();

// create the provider
export function GameProvider({ children }) {
    // create the game state
    const [game, setGame] = React.useState({
        // create the dart locations array
        dartLocations: [],
        // create the dart count
        dartCount: 0,
        // create the players score
        player1Score: 301,
        player2Score: 301,
        // create the player turn
        playerTurn: 1,
        // create the points per round
        pointsPerDart: 0,
        // create the players
        player1: 'Player 1',
        player2: 'Player 2',
        // game id
        gameId: 0,
        // UserName
        userName: '',
        // Login status
        loggedIn: false,

    });
    console.log(game.dartLocations);
    // create the provider
    return (
        <GameContext.Provider value={{ game, setGame }}>
            {children}
        </GameContext.Provider>
    );
}

// export the provider
export default GameProvider;

