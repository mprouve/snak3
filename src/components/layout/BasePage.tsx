import { FC, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
// import Header from 'src/components/header/Header';
// import Footer from 'src/components/footer/Footer';
import Snackbar from 'src/components/feedback/Snackbar';
import Styled from 'src/components/layout/BasePage.styles';

interface BasePageProps {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
}

const BasePage: FC<BasePageProps> = ({ children, header = true, footer = true }) => {
  return (
    <Styled.Root>
      <AnimatePresence>
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {header && null}
          {children}
          {footer && null}

          <Snackbar />
        </motion.span>
      </AnimatePresence>
    </Styled.Root>
  );
};

export default BasePage;
