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
 */

import * as React from 'react';

// create the context
export const GameContext = React.createContext();

// create the provider
export function GameProvider({ children }) {
    // create the game state
    const [game, setGame] = React.useState({
        gameStatus: false,
        gameID: 0,
        players: [],
        currentPlayer: 0,
        currentRound: 0,
        currentScore: 0,
        darts: [],

        // the game settings
        numberOfPlayers: 0,
        numberOfRounds: 0,
        startingScore: 0,

        // the game results
        results: [],

        // the dart locations
        dartLocations: [],

        // the dart scores
        dartScores: [],
    });

    // create the provider
    return (
        <GameContext.Provider value={{ game, setGame }}>
            {children}
        </GameContext.Provider>
    );
}

// export the provider
export default GameProvider;

