// Helper functions
function validPos(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function isEnd(currPos, end) {
  return currPos[0] === end[0] && currPos[1] === end[1];
}

function moveKnight(startPos, endPos) {
  // Define the valid moves a knight can make
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  // Start a queue storing the path
  let queue = [[startPos]];

  // Have a set for all visited nodes
  let visited = new Set();

  // Add initial position to the set
  visited.add(startPos.toString());

  // BFS loop - continues until queue is empty (all possible moves explored)
  while (queue.length > 0) {
    // Get and remove the first path from the queue
    let path = queue.shift();
    let currPos = path[path.length - 1]; // Gets the last step in the path

    // Return the path if current position is the end position
    if (isEnd(currPos, endPos)) {
      return path;
    }

    // brute force next moves
    for (const [X, Y] of moves) {
      // X = moves[i][0], Y = moves[i][1]
      // Add the valid move to the current position
      let newX = currPos[0] + X;
      let newY = currPos[1] + Y;
      const newPos = [newX, newY]; // Store the new position

      // Make sure the new position is valid and has not been visited before
      if (validPos(newX, newY) && !visited.has(newPos.toString())) {
        // Flag the new position as visited
        visited.add(newPos.toString());

        // Put the path in the queue
        const newPath = [...path, newPos];
        queue.push(newPath);
      }
    }
  }
  return null;
}

// Convert algebraic notation (e.g. "a1") to coordinates [x, y]
function algebraicToCoords(position) {
  if (!position.match(/^[a-h][1-8]$/)) {
    return null; // Invalid input
  }

  const file = position.charAt(0).toLowerCase();
  const rank = parseInt(position.charAt(1));

  const x = file.charCodeAt(0) - "a".charCodeAt(0); // 'a' -> 0, 'b' -> 1, etc.
  const y = 8 - rank; // Chess ranks are bottom-to-top, our grid is top-to-bottom

  return [x, y];
}

// Convert coordinates [x, y] to algebraic notation (e.g. "a1")
function coordsToAlgebraic(x, y) {
  const file = String.fromCharCode("a".charCodeAt(0) + x);
  const rank = 8 - y;
  return `${file}${rank}`;
}

// Create the chess board with file and rank labels
function createBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";

  // Add top-left empty corner
  const topLeftCorner = document.createElement("div");
  board.appendChild(topLeftCorner);

  // Add file labels (a-h) at the top
  for (let x = 0; x < 8; x++) {
    const fileLabel = document.createElement("div");
    fileLabel.className = "label";
    fileLabel.textContent = String.fromCharCode("a".charCodeAt(0) + x);
    board.appendChild(fileLabel);
  }

  // Add top-right empty corner
  const topRightCorner = document.createElement("div");
  board.appendChild(topRightCorner);

  for (let y = 0; y < 8; y++) {
    // Add rank label (8-1) on the left
    const leftRankLabel = document.createElement("div");
    leftRankLabel.className = "label";
    leftRankLabel.textContent = 8 - y;
    board.appendChild(leftRankLabel);

    // Add the actual chess squares
    for (let x = 0; x < 8; x++) {
      const square = document.createElement("div");
      square.className = `square ${(x + y) % 2 === 0 ? "light" : "dark"}`;
      square.dataset.x = x;
      square.dataset.y = y;
      square.dataset.pos = coordsToAlgebraic(x, y);
      board.appendChild(square);
    }

    // Add rank label (8-1) on the right
    const rightRankLabel = document.createElement("div");
    rightRankLabel.className = "label";
    rightRankLabel.textContent = 8 - y;
    board.appendChild(rightRankLabel);
  }

  // Add bottom-left empty corner
  const bottomLeftCorner = document.createElement("div");
  board.appendChild(bottomLeftCorner);

  // Add file labels (a-h) at the bottom
  for (let x = 0; x < 8; x++) {
    const fileLabel = document.createElement("div");
    fileLabel.className = "label";
    fileLabel.textContent = String.fromCharCode("a".charCodeAt(0) + x);
    board.appendChild(fileLabel);
  }

  // Add bottom-right empty corner
  const bottomRightCorner = document.createElement("div");
  board.appendChild(bottomRightCorner);
}

// Display the knight's path on the board
function displayPath(path) {
  // Clear any previous path
  document
    .querySelectorAll(".path-marker, .knight")
    .forEach((el) => el.remove());

  // Reset square backgrounds
  document.querySelectorAll(".square").forEach((square) => {
    square.classList.remove("start", "end");
  });

  if (!path) {
    alert("No valid path found!");
    return;
  }

  // Mark start and end positions
  const startSquare = document.querySelector(
    `.square[data-x="${path[0][0]}"][data-y="${path[0][1]}"]`
  );
  const endSquare = document.querySelector(
    `.square[data-x="${path[path.length - 1][0]}"][data-y="${
      path[path.length - 1][1]
    }"]`
  );

  startSquare.classList.add("start");
  endSquare.classList.add("end");

  // Place knight at the end position
  const knight = document.createElement("div");
  knight.className = "knight";
  knight.textContent = "♞";
  endSquare.appendChild(knight);

  // Add path markers
  for (let i = 0; i < path.length - 1; i++) {
    const square = document.querySelector(
      `.square[data-x="${path[i][0]}"][data-y="${path[i][1]}"]`
    );

    const marker = document.createElement("div");
    marker.className = "path-marker";
    marker.textContent = i + 1;
    square.appendChild(marker);
  }

  // Display path information
  const pathInfo = document.getElementById("pathInfo");
  pathInfo.classList.remove("hidden");

  const moveCount = document.getElementById("moveCount");
  moveCount.textContent = `The knight made ${path.length - 1} moves`;

  const steps = document.getElementById("steps");
  steps.innerHTML = "";

  const squares = ["a", "b", "c", "d", "e", "f", "g", "h"];
  for (let i = 0; i < path.length; i++) {
    const step = document.createElement("div");
    step.className = "step";
    step.textContent = `Step ${i}: ${squares[path[i][0]]}${8 - path[i][1]}`;
    steps.appendChild(step);
  }
}

// Initialize the app
function init() {
  createBoard();

  const findPathButton = document.getElementById("findPath");
  findPathButton.addEventListener("click", () => {
    const startInput = document.getElementById("start").value;
    const endInput = document.getElementById("end").value;

    const start = algebraicToCoords(startInput);
    const end = algebraicToCoords(endInput);

    if (!start || !end) {
      alert("Please enter valid positions (e.g. a1, h8)");
      return;
    }

    const path = moveKnight(start, end);
    displayPath(path);
  });
}

// Start the application
window.addEventListener("DOMContentLoaded", init);
