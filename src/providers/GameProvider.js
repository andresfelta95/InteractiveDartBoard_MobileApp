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
        score: 501,
        round: 1,
        player: 1,
        players: 2,
        scores: [],
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

