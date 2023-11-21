# Tenzies Game Project

Welcome to the Tenzies game project repository! Tenzies is a simple dice game where the goal is to roll until all dice show the same value. You can freeze individual dice between rolls to strategize and achieve the desired outcome.

## Project Structure

- **index.html:** The entry point of the application. It includes the root div where the React app is rendered and references the main JavaScript file.

- **main.jsx:** The main React component that renders the entire Tenzies game. It utilizes the Die component and manages the game logic, including rolling the dice, holding them, and determining when the player achieves "Tenzies."

- **Die.jsx:** A reusable React component representing a single die. It displays the die's value and changes its background color when held. It also triggers the holdDice function when clicked.

## Technologies Used

- **React:** The project is built using React

- **nanoid:** Used for generating unique IDs for each die.

- **react-confetti:** A lightweight library for creating confetti effects. It is used to celebrate when the player achieves "Tenzies."

## How to Play

1. Click the "Roll" button to roll the dice.
2. Click on individual dice to freeze them at their current values.
3. Keep rolling until all dice show the same value to achieve "Tenzies."
4. Once "Tenzies" is achieved, confetti will appear, and you can start a new game by clicking the "New Game" button.

## Check It Out

Visit the live [Tenzies game](https://tenzies-gameproj.netlify.app/)  to explore its features and functionality.

## Development

If you want to make modifications or improvements to the game:

1. Fork the repository.
2. Make your changes.
3. Submit a pull request.

Feel free to explore the code and experiment with enhancing the game or adding new features. If you encounter any issues or have suggestions, please open an issue in this repository.

Have fun playing Tenzies!
