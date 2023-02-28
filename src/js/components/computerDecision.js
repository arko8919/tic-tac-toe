import minimax from "./minmax";

export default function computerDecision(squares, player) {

    // get id of space using minimax algorithm
    let id = minimax(squares, player.computer, player).id

    let newSquares = squares;
    newSquares[id] = player.computer

    return newSquares;
}
