import React from 'react';

/**
 * We import the necessary modules from React, including lazy and Suspense.
 * We use the lazy function to dynamically import the MyComponent module using the import() syntax. This allows for lazy loading of the component.
 * Within the App component, we use the Suspense component to wrap the lazy-loaded component.
 * The fallback prop of Suspense specifies the fallback UI to render while the lazy-loaded component is being loaded.
 * In this example, we simply render a loading message (<div>Loading...</div>) as the fallback UI.
 * When the lazy-loaded component is ready, React renders it within the Suspense component.
 *
 * Lazy loading in React allows you to defer the loading of certain components until they are actually needed, which can
 * improve the initial load time of your application.
 */

// const MyComponent = React.lazy(() => import('./MyComponent'));

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>{/* <MyComponent /> */}</React.Suspense>
    </div>
  );
};

export default App;
