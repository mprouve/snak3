import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { nameSpace } from 'src/modules/i18n';
import useGameContext from 'src/hooks/useGameContext';
import PlayButton from 'src/components/pages/home/components/PlayButton';
import GameBoard from 'src/components/pages/home/components/GameBoard';
import GameScore from 'src/components/pages/home/components/GameScore';
import GameInstructions from 'src/components/pages/home/components/GameInstructions';
import Styled from 'src/components/pages/home/HomePage.styles';
// import { logMain } from 'src/modules/logger/logger';

const HomePage: FC = () => {
  const { gameOpen } = useGameContext();
  const { t } = useTranslation(nameSpace.common);

  // logMain.debug({ gameOpen, gameState });

  return (
    <Styled.Root style={{ backgroundImage: `url(/assets/snak3_bkg_1.webp)` }}>
      <Styled.BackgroundOverlay>
        <Styled.CenteredContainer>
          <div>
            <Styled.Title>
              Welcome to <span>{t('common.project.name')}!</span>
            </Styled.Title>
          </div>

          {gameOpen ? (
            <>
              <GameBoard />
              <GameScore />
              <GameInstructions />
            </>
          ) : (
            <Styled.PlayButtonContainer>
              <PlayButton />
            </Styled.PlayButtonContainer>
          )}
        </Styled.CenteredContainer>
      </Styled.BackgroundOverlay>
    </Styled.Root>
  );
};

export default HomePage;
