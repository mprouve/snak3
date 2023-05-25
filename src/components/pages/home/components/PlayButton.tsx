import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { nameSpace } from 'src/modules/i18n';
import useGameContext from 'src/hooks/useGameContext';
import Styled from 'src/components/pages/home/components/PlayButton.styles';

const PlayButton: FC = () => {
  const { setGameOpen } = useGameContext();
  const { t } = useTranslation(nameSpace.common);

  return <Styled.Root onClick={() => setGameOpen(true)}>{t('common.term.play')}</Styled.Root>;
};

export default PlayButton;
