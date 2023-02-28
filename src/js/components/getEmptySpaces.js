export default function getEmptySpaces(gameData) {
    let emptySpaces = [];

    for(let id = 0; id < gameData.length; id++) {
        if(!gameData[id]) {
            emptySpaces.push(id);
        }        
    }

    return emptySpaces;
}