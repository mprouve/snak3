import { FC, Suspense } from 'react';
import BasePage from 'src/components/layout/BasePage';
import Loader from 'src/components/loader/Loader';
import RouteRenderer from 'src/routes/routes';

const App: FC = () => {
  return (
    <BasePage>
      <Suspense fallback={<Loader />}>
        <RouteRenderer />
      </Suspense>
    </BasePage>
  );
};

export default App;
