import calculateWinner from "./calculateWinner";
import isTie from "./isTie";
import getEmptySpaces from "./getEmptySpaces";

export default function minimax(gameData, player, playerObject) {
    // BASE
    let result = calculateWinner(gameData, playerObject.computer);
    if (result === playerObject.computer) {
        return { evaluation: +10 };
    }

    if (result === playerObject.man) {
        return { evaluation: -10 };
    }

    if (isTie(gameData)) {
        return { evaluation: 0 };
    }

    // Look for empty spaces
    let emptySpaces = getEmptySpaces(gameData);
    //console.log("Empty spaces left: " + emptySpaces);

    // Save all moves and their evaluations
    let moves = [];
    // Loop over the empty spaces to evaluate them
    for (let i = 0; i < emptySpaces.length; i++) {
        // Get the id of the empty space
        let id = emptySpaces[i];

        // Backup empty space
        let backup = gameData[id];

        // Make the move for the playerObject. Assign O or X to gameData[id]
        gameData[id] = player;

        // Save the move's ID and evaluation
        let move = {};
        move.id = id;

        // The move evaulation
        if (player === playerObject.computer) {
            // If the computer made a move, make the move for the man
            // If there will be winner or tie, the code will run further
            move.evaluation = minimax(
                gameData,
                playerObject.man,
                playerObject
            ).evaluation;
        } else {
            // If the man made a move, make the move for the computer
            move.evaluation = minimax(
                gameData,
                playerObject.computer,
                playerObject
            ).evaluation;
        }

        // Restore space
        gameData[id] = backup;

        // Save move to moves array
        moves.push(move);
    }

    // Minimax algorithm
    let bestMove;

    if (player === playerObject.computer) {
        // Maximizer
        let bestEvaluation = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].evaluation > bestEvaluation) {
                bestEvaluation = moves[i].evaluation;
                bestMove = moves[i];
            }
        }
    } else {
        // Minimizer
        let bestEvaluation = +Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].evaluation < bestEvaluation) {
                bestEvaluation = moves[i].evaluation;
                bestMove = moves[i];
            }
        }
    }
    //console.log(bestMove);
    return bestMove;
}
