# Knight's Travails

## Project Description
Knight's Travails is an interactive web application that demonstrates the shortest path a knight can take between any two positions on a chess board. This project showcases the implementation of a breadth-first search (BFS) algorithm to find the most efficient path for a knight's movement according to chess rules.

![Knight's Travails Screenshot](https://i.imgur.com/placeholder.jpg)
*Note: Replace with an actual screenshot of your project when available*

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Graph Theory & BFS Algorithm

## Features

### Core Features
- **Interactive Chess Board**: Visual 8x8 chess board with standard a-h and 1-8 notation
- **Custom Start/End Positions**: User can input any valid start and end positions
- **Path Visualization**: Displays the optimal path with numbered steps
- **Move Counter**: Shows the total number of moves required
- **Step-by-Step Breakdown**: Lists each position in the knight's journey

### Additional Features
- **Move Validation**: Ensures all inputs are valid chess positions
- **Visual Enhancements**: Clear distinction between light and dark squares
- **Responsive Design**: Works on various screen sizes
- **Chess Notation Conversion**: Translates between algebraic notation and coordinates

## Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

### Setup
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/knights-travails.git
   ```
2. Open the project folder:
   ```
   cd knights-travails
   ```
3. Open `index.html` in your browser:
   - Double-click the file in your file explorer
   - Or use a local development server

## Usage

1. **Enter Starting Position**: Type a valid chess position (e.g., "a1") in the "Start Position" field
2. **Enter Ending Position**: Type a valid chess position (e.g., "h8") in the "End Position" field
3. **Find Path**: Click the "Find Path" button
4. **View Results**:
   - The chess board will display the path with numbered markers
   - The knight piece will appear at the ending position
   - Below the board, you'll see the total number of moves and each step in the path

## Algorithm Details

The application uses a Breadth-First Search (BFS) algorithm to find the shortest path:

1. It represents the chess board as a graph where each square is a node
2. Knight's valid moves create edges between nodes
3. BFS explores all possible moves level by level, guaranteeing the shortest path
4. A visited set prevents cycles and ensures efficiency
5. Each path is tracked and returned once the destination is found

## Future Enhancements

Potential features for future versions:
- Animation of the knight's movement along the path
- Multiple algorithm options for comparison (DFS, A*, etc.)
- Option to show all possible knight moves from any position
- Support for other chess pieces and their movement patterns
- Ability to place obstacles on the board

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- The Odin Project for the inspiration and project guidelines
- Graph theory resources that helped in understanding the BFS algorithm