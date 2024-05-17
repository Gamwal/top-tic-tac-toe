# Tic-Tac-Toe Game

This project is a simple implementation of the classic Tic-Tac-Toe game using JavaScript, HTML, and CSS. It allows two players to play against each other, taking turns to mark the spaces in a 3x3 grid.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- Two-player mode with 'X' and 'O' markers
- Input fields for player names
- Displays whose turn it is
- Detects and announces the winner or a draw
- Reset button to start a new game

## Installation
To get a local copy up and running, follow these simple steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/gamwal/tic-tac-toe.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd tic-tac-toe
    ```

## Usage
1. Open `index.html` in your web browser.
2. Enter player names in the provided input fields.
3. Click on a cell in the grid to make a move.
4. The game will display whose turn it is and will announce the winner or if it’s a draw.
5. Use the reset button to clear the board and start a new game.

## Code Structure
- **HTML**: Contains the structure of the game board and input fields for player names.
- **CSS**: Provides styling for the game board and other elements.
- **JavaScript**: Implements the game logic, including player turns, checking for a winner, and resetting the game.

### Key Files
- `index.html`: Main HTML file containing the structure of the game.
- `style.css`: CSS file for styling the game.
- `script.js`: JavaScript file containing the game logic.

### JavaScript Functions
- **Player()**: Manages player states, including current player, switching turns, and displaying prompts.
- **gamePlay()**: Initializes the game, handles click events on the board, updates the board, checks for a winner, and resets the game.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Feel free to modify as needed