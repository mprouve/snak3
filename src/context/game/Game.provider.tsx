import { FC, ReactNode, useState, useMemo } from 'react';
import GameContext, { initialContext, IGameContext } from 'src/context/game/Game.context';
// import { logMain } from 'src/modules/logger/logger';

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const [gameOpen, setGameOpen] = useState<IGameContext['gameOpen']>(initialContext.gameOpen);
  const [gridSize, setGridSize] = useState<IGameContext['gridSize']>(initialContext.gridSize);
  const [movementSpeed, setMovementSpeed] = useState<IGameContext['movementSpeed']>(initialContext.movementSpeed);
  const [gameState, setGameState] = useState<IGameContext['gameState']>(initialContext.gameState);
  const [headState, setHeadState] = useState<IGameContext['headState']>(initialContext.headState);
  const [foodState, setFoodState] = useState<IGameContext['foodState']>(initialContext.foodState);
  const [movementDir, setMovementDir] = useState<IGameContext['movementDir']>(initialContext.movementDir);
  const [score, setScore] = useState<IGameContext['score']>(initialContext.score);
  const [highScore, setHighScore] = useState<IGameContext['highScore']>(initialContext.highScore);
  const [gameOver, setGameOver] = useState<IGameContext['gameOver']>(initialContext.gameOver);

  // logMain.debug({ gameState, headState, foodState, movementDir, score, highScore, gameOver });

  const value = useMemo(
    () => ({
      gameOpen,
      setGameOpen,
      gridSize,
      setGridSize,
      movementSpeed,
      setMovementSpeed,
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
    }),
    [
      gameOpen,
      setGameOpen,
      gridSize,
      setGridSize,
      movementSpeed,
      setMovementSpeed,
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
    ],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
