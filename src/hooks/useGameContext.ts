import { useContext } from 'react';
import GameContext from 'src/context/game/Game.context';

const useGameContext = () => {
  const gameContext = useContext(GameContext);

  return gameContext;
};

export default useGameContext;
