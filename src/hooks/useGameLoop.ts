/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import useGameContext from 'src/hooks/useGameContext';
import { logMain } from 'src/modules/logger/logger';
import { useInterval } from 'src/hooks/useInterval';
import { placeFood } from 'src/tools/createGameState';

export const useGameLoop = () => {
  const {
    gameOpen,
    gridSize,
    gameState,
    setGameState,
    headState,
    setHeadState,
    foodState,
    setFoodState,
    movementDir,
    setMovementDir,
    score,
    setScore,
    highScore,
    setHighScore,
    gameOver,
    setGameOver,
    setVictory,
  } = useGameContext();

  const handleVictory = useCallback(() => {
    setVictory(true);
  }, [setVictory]);

  const handleGameOver = useCallback(() => {
    setGameOver(true);
    setMovementDir(null);
  }, [setGameOver, setMovementDir]);

  // We will run the game loop only when the game is running
  // We will first move the snake head and body before doing and game state checks
  const handleUpdateGameState = useCallback(() => {
    if (!gameOver && gameOpen && movementDir) {
      const newGameState = [...gameState];
      const currentHeadValue = newGameState[headState[0]][headState[1]];
      const newHeadValue = currentHeadValue + 1;
      let drow = 0;
      let dcol = 0;

      // We will set the direction of the snake head based on the movement direction
      if (movementDir === 'up') {
        drow = -1;
        dcol = 0;
      } else if (movementDir === 'right') {
        drow = 0;
        dcol = 1;
      } else if (movementDir === 'down') {
        drow = 1;
        dcol = 0;
      } else if (movementDir === 'left') {
        drow = 0;
        dcol = -1;
      }

      // We will move the snake head
      const newHeadState = [headState[0] + drow, headState[1] + dcol];
      const isOnFood = newHeadState[0] === foodState[0] && newHeadState[1] === foodState[1];
      let newFoodState = [...foodState];

      // We will check if the snake head is out of bounds
      if (newHeadState[0] < 0 || newHeadState[0] >= gridSize || newHeadState[1] < 0 || newHeadState[1] >= gridSize) {
        logMain.debug('Game Over: Snake head out of bounds');
        handleGameOver();
        return;
      }

      // We will check if the snake head has collided with body
      if (newGameState[newHeadState[0]][newHeadState[1]] > 0) {
        logMain.debug('Game Over: Snake head collided with body');
        handleGameOver();
        return;
      }

      // If the snake head is not on food, we will loop through all tiles and decreases all tile values by 1
      // If they contain a body element.
      // If the tile is on food, we will increase the score and generate a new food tile
      if (isOnFood) {
        logMain.debug('Snake head on food');

        newGameState[newHeadState[0]][newHeadState[1]] = newHeadValue;
        setScore(score + 1);
        setHighScore(Math.max(score + 1, highScore));
        newFoodState = [...placeFood(newGameState)];
      }

      // If we did not find an empty space, we will handle victory
      if (newFoodState[0] === -1 && newFoodState[1] === -1) {
        handleVictory();
        handleGameOver();
        return;
      }

      // Set the new head state in the new game state
      newGameState[newHeadState[0]][newHeadState[1]] = newHeadValue;

      // We will loop through all tiles and decreases all tile values by 1 if they contain a body element
      for (let i = 0; i < newGameState.length; i += 1) {
        const row = newGameState[i];

        for (let j = 0; j < row.length; j += 1) {
          const tileValue = newGameState[i][j];

          if (tileValue > 0) {
            if (!isOnFood) {
              newGameState[i][j] -= 1;
            }
          }
        }
      }

      logMain.debug('Moving snake head');

      setHeadState(newHeadState);
      setFoodState(newFoodState);
      setGameState(newGameState);
    }
  }, [
    foodState,
    gameOpen,
    gameOver,
    gameState,
    gridSize,
    handleGameOver,
    handleVictory,
    headState,
    highScore,
    movementDir,
    score,
    setFoodState,
    setGameState,
    setHeadState,
    setHighScore,
    setScore,
  ]);

  useInterval(handleUpdateGameState, 120);

  return null;
};
