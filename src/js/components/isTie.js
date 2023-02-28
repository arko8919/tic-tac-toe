export default function isTie(gameData) {
    let isBoardFill = true;
    for (let i = 0; i < gameData.length; i++) {
        isBoardFill = gameData[i] && isBoardFill;
    }
    if (isBoardFill) {
        return true;
    }
    return false;
}
