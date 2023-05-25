/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { randomIntFromInterval } from 'src/tools/randomIntFromInterval';

// Function to place the snake head on the game board.
const placeSnakeHead = (gameState: number[][]) => {
  const randomRow = randomIntFromInterval(0, gameState.length - 1);
  const randomCol = randomIntFromInterval(0, gameState.length - 1);

  gameState[randomRow][randomCol] = 1;

  return [randomRow, randomCol];
};

// Function to place the food on the game board.
export const placeFood = (gameState: number[][]): number[] => {
  let randomRow = randomIntFromInterval(0, gameState.length - 1);
  let randomCol = randomIntFromInterval(0, gameState.length - 1);

  while (gameState[randomRow][randomCol] > 0) {
    randomRow = randomIntFromInterval(0, gameState.length - 1);
    randomCol = randomIntFromInterval(0, gameState.length - 1);

    if (gameState.every(row => row.every(col => col > 0))) {
      return [-1, -1];
    }
  }

  gameState[randomRow][randomCol] = -1;

  return [randomRow, randomCol];
};

// Function to set up the Snak3 game board.
// The game board is a 2D array of numbers.
// Each number represents a different state:
// 0 = empty
// 1 = snake head
// 2 = snake body
// 3 = food
export const createGameState = (gridSize: number) => {
  const gameState: number[][] = [];

  for (let i = 0; i < gridSize; i++) {
    gameState.push([]);

    for (let j = 0; j < gridSize; j++) {
      gameState[i].push(0);
    }
  }

  const headState = placeSnakeHead(gameState);
  const foodState = placeFood(gameState);

  return { gameState, headState, foodState };
};
