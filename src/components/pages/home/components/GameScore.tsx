import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { nameSpace } from 'src/modules/i18n';
import useGameContext from 'src/hooks/useGameContext';
import Styled from 'src/components/pages/home/components/GameScore.styles';

const GameScore: FC = () => {
  const { score, highScore } = useGameContext();
  const { t } = useTranslation(nameSpace.common);

  return (
    <Styled.Root>
      <Styled.ScoreContainer>
        <span>{t('common.term.score')}</span>
        <span>{score}</span>

        <span>{t('common.term.highscore')}</span>
        <span>{highScore}</span>
      </Styled.ScoreContainer>
    </Styled.Root>
  );
};

export default GameScore;
