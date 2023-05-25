import { FC } from 'react';
import DOMPurify from 'dompurify';
import { useTranslation } from 'react-i18next';
import { nameSpace } from 'src/modules/i18n';
import { useAppNavigateInternal } from 'src/hooks/useAppNavigateInternal';
import Styled from 'src/components/pages/not-found/NotFound.styles';

const NotFound: FC = () => {
  const { t } = useTranslation(nameSpace.notFound);
  const navigateInternal = useAppNavigateInternal();

  return (
    <Styled.Root>
      <Styled.ContentContainer>
        <Styled.Heading dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t('notFound.title')) }} />
        <Styled.Subheading dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t('notFound.description')) }} />

        <Styled.Button onClick={() => navigateInternal(`/home`, {})}>{t('notFound.action')}</Styled.Button>
      </Styled.ContentContainer>
    </Styled.Root>
  );
};

export default NotFound;
