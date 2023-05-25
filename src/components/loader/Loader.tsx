import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { nameSpace } from 'src/modules/i18n';
import Logo from 'src/assets/logo/snak3.webp';
import * as Styled from 'src/components/loader/Loader.styles';

const Loader: FC = () => {
  const { t } = useTranslation(nameSpace.common);

  return (
    <Styled.Root>
      <div className="brand-logo">
        <img className="img-fluid" src={Logo} width="406" height="213" loading="lazy" alt={t('common.project.name')} />
      </div>
    </Styled.Root>
  );
};

export default Loader;
