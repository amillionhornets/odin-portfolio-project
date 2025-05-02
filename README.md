# Knight's Travails

## Project Description
Knight's Travails is an interactive web application that demonstrates the shortest path a knight can take between any two positions on a chess board. This project showcases the implementation of a breadth-first search (BFS) algorithm to find the most efficient path for a knight's movement according to chess rules.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- BFS Algorithm

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
- **Chess Notation Conversion**: Translates between algebraic notation and coordinates

### Setup
1. Go to https://amillionhornets.github.io/odin-portfolio-project/ and input a start and end position  

## Algorithm Details

The application uses a Breadth-First Search (BFS) algorithm to find the shortest path:

1. It represents the chess board as a graph where each square is a node
2. Knight's valid moves create edges between nodes
3. BFS explores all possible moves level by level, guaranteeing the shortest path
4. A visited set prevents cycles and ensures efficiency
5. Each path is tracked and returned once the destination is found

## License

This project is licensed under the MIT License - see the LICENSE file for details.