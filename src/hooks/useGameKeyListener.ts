import { useCallback, useEffect } from 'react';
import useGameContext from 'src/hooks/useGameContext';
import { logMain } from 'src/modules/logger/logger';

type MovementDirections = 'up' | 'right' | 'down' | 'left' | null;

export const useGameKeyListener = () => {
  const { movementDir, setMovementDir } = useGameContext();

  const handleChangeMovementDir = useCallback(
    (newMovementDir: MovementDirections, disabledDir: MovementDirections) => {
      if (movementDir !== newMovementDir && movementDir !== disabledDir) {
        setMovementDir(newMovementDir);
      }
    },
    [movementDir, setMovementDir],
  );

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;

      switch (key) {
        case 'w':
        case 'ArrowUp':
          logMain.debug('Up key pressed');
          handleChangeMovementDir('up', 'down');
          break;

        case 'a':
        case 'ArrowLeft':
          logMain.debug('Left key pressed');
          handleChangeMovementDir('left', 'right');
          break;

        case 's':
        case 'ArrowDown':
          logMain.debug('Down key pressed');
          handleChangeMovementDir('down', 'up');
          break;

        case 'd':
        case 'ArrowRight':
          logMain.debug('Right key pressed');
          handleChangeMovementDir('right', 'left');
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleChangeMovementDir, setMovementDir]); // Empty dependency
};
