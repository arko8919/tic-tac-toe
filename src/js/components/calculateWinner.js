export default function calculateWinner(squares) {
  // These are three squares in line, which determine the winner
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    // Assign winning combination
    const [a, b, c] = lines[i];
    // Test if all fields in winning combination match X or O
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Return X or O as winning combination
      return squares[a];
    }
  }
  // If there is no winner return null
  return null;
}
