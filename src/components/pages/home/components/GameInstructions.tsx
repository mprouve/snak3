import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { nameSpace } from 'src/modules/i18n';
import Styled from 'src/components/pages/home/components/GameInstructions.styles';

const GameInstructions: FC = () => {
  const { t: tGame } = useTranslation(nameSpace.game);
  const { t: tCommon } = useTranslation(nameSpace.common);

  return (
    <Styled.Root>
      <Styled.InstructionsContainer>
        <span>{tGame('game.instructions')}</span>

        <Styled.Image
          src="/assets/keyboard_arrows.webp"
          width="100"
          height="100"
          alt="Movement Controls"
          title="Movement Controls"
        />

        <span>{tCommon('common.term.or')}</span>

        <Styled.Image
          src="/assets/keyboard_wasd.webp"
          width="100"
          height="100"
          alt="Movement Controls"
          title="Movement Controls"
        />
      </Styled.InstructionsContainer>
    </Styled.Root>
  );
};

export default GameInstructions;
