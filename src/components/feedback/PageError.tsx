import { FC } from 'react';
import DOMPurify from 'dompurify';
import { useAppNavigateInternal } from 'src/hooks/useAppNavigateInternal';
import { useTranslation } from 'react-i18next';
import { nameSpace } from 'src/modules/i18n';
import Styled from 'src/components/feedback/PageError.styles';

const PageError: FC = () => {
  const { t } = useTranslation(nameSpace.common);
  const navigateInternal = useAppNavigateInternal();

  return (
    <Styled.Root>
      <Styled.ContentContainer>
        <Styled.Heading dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t('common.page.error.title')) }} />
        <Styled.Subheading
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t('common.page.error.description')) }}
        />

        <Styled.Button onClick={() => navigateInternal(`/home`, {})}>{t('common.page.error.action')}</Styled.Button>
      </Styled.ContentContainer>
    </Styled.Root>
  );
};

export default PageError;
