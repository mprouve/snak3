import { createContext } from 'react';
import { config } from 'src/config/config';
import { createGameState } from 'src/tools/createGameState';

type MovementDirections = 'up' | 'down' | 'left' | 'right' | null;

const defaultGameState = createGameState(config.game_defaults.grid_size);

export interface IGameContext {
  gameOpen: boolean;
  setGameOpen: (gameOpen: boolean) => void;
  gridSize: number;
  setGridSize: (gridSize: number) => void;
  movementSpeed: number;
  setMovementSpeed: (movementSpeed: number) => void;
  gameState: number[][];
  setGameState: (gameState: number[][]) => void;
  headState: number[];
  setHeadState: (headState: number[]) => void;
  foodState: number[];
  setFoodState: (foodState: number[]) => void;
  movementDir: MovementDirections;
  setMovementDir: (movementDir: MovementDirections) => void;
  score: number;
  setScore: (score: number) => void;
  highScore: number;
  setHighScore: (highScore: number) => void;
  victory: boolean;
  setVictory: (victory: boolean) => void;
  gameOver: boolean;
  setGameOver: (gameOver: boolean) => void;
}

export const initialContext: IGameContext = {
  gameOpen: false,
  setGameOpen: () => undefined,
  gridSize: config.game_defaults.grid_size,
  setGridSize: () => undefined,
  movementSpeed: config.game_defaults.movement_speed,
  setMovementSpeed: () => undefined,
  gameState: defaultGameState.gameState,
  setGameState: () => undefined,
  headState: defaultGameState.headState,
  setHeadState: () => undefined,
  foodState: defaultGameState.foodState,
  setFoodState: () => undefined,
  movementDir: null,
  setMovementDir: () => undefined,
  score: 0,
  setScore: () => undefined,
  highScore: 0,
  setHighScore: () => undefined,
  victory: false,
  setVictory: () => undefined,
  gameOver: false,
  setGameOver: () => undefined,
};

const GameContext = createContext<IGameContext>(initialContext);

GameContext.displayName = 'GameContext';

export default GameContext;
