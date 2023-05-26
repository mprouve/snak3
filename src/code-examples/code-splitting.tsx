import React, { useState } from 'react';

/**
 * We import the necessary modules from React, including useState and React.lazy.
 * We use React.lazy with dynamic import syntax to lazily load the MyComponent module when it's needed.
 * The App component defines a state variable showComponent and a click event handler handleClick.
 * Clicking the "Load Component" button sets the showComponent state to true, triggering the rendering of the lazy-loaded component.
 * Inside the JSX, we use React.Suspense to wrap the lazy-loaded component. The fallback prop defines the fallback UI to render while the component is loading.
 * In this example, we render a simple loading message (<div>Loading...</div>) as the fallback UI.
 *
 * Code splitting allows you to split your bundle into smaller chunks and load them on-demand, resulting in faster initial load times.
 */

// const MyComponent = React.lazy(() => import('./MyComponent'));

const App = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Load Component</button>

      {showComponent && <React.Suspense fallback={<div>Loading...</div>}>{/* <MyComponent /> */}</React.Suspense>}
    </div>
  );
};

export default App;
