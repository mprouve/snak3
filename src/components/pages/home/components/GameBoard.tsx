import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { nameSpace } from 'src/modules/i18n';
import useGameContext from 'src/hooks/useGameContext';
import { useGameLoop } from 'src/hooks/useGameLoop';
import { useGameKeyListener } from 'src/hooks/useGameKeyListener';
import { createGameState } from 'src/tools/createGameState';
import FoodIcon from 'src/assets/logo/snak3.webp';
import Styled from 'src/components/pages/home/components/GameBoard.styles';
// import { logMain } from 'src/modules/logger/logger';

const GameBoard: FC = () => {
  const {
    gameOpen,
    setGameOpen,
    gridSize,
    gameState,
    setGameState,
    setHeadState,
    setFoodState,
    movementDir,
    setMovementDir,
    setScore,
    gameOver,
    setGameOver,
  } = useGameContext();
  const { t: tGame } = useTranslation(nameSpace.game);
  const { t: tCommon } = useTranslation(nameSpace.common);

  useGameLoop();
  useGameKeyListener();

  const handleRestart = () => {
    const newGameState = createGameState(gridSize);

    setGameState(newGameState.gameState);
    setHeadState(newGameState.headState);
    setFoodState(newGameState.foodState);
    setMovementDir(null);
    setScore(0);
    setGameOver(false);
  };

  const handleQuit = () => {
    const newGameState = createGameState(gridSize);

    setGameOpen(false);
    setGameState(newGameState.gameState);
    setHeadState(newGameState.headState);
    setFoodState(newGameState.foodState);
    setMovementDir(null);
    setScore(0);
    setGameOver(false);
  };

  return (
    <Styled.Root>
      {gameState.map((row, i) => {
        return row.map((col, j) => {
          return (
            <Styled.TileContainer key={`tile-${i}-${j}`} gridSize={gridSize} row={i} col={j}>
              {col === -1 ? (
                <Styled.TileFood src={FoodIcon} width="160" height="160" alt="Food Icon" title="Food Icon" />
              ) : (
                <Styled.Tile value={col} />
              )}
            </Styled.TileContainer>
          );
        });
      })}

      {gameOpen && !gameOver && !movementDir && (
        <Styled.OverlayContainer>
          <Styled.OverlayContent>
            <Styled.OverlayTitle>{tGame('game.begin')}</Styled.OverlayTitle>
          </Styled.OverlayContent>
        </Styled.OverlayContainer>
      )}

      {gameOver && (
        <Styled.OverlayContainer>
          <Styled.OverlayContent>
            <Styled.OverlayTitle>{tGame('game.game.over')}</Styled.OverlayTitle>
            <Styled.RestartButton onClick={handleRestart}>{tCommon('common.term.restart')}</Styled.RestartButton>
            <Styled.QuitButton onClick={handleQuit}>{tCommon('common.term.quit')}</Styled.QuitButton>
          </Styled.OverlayContent>
        </Styled.OverlayContainer>
      )}
    </Styled.Root>
  );
};

export default GameBoard;
