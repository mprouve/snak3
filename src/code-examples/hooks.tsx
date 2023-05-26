import { useState, useEffect } from 'react';
import { logMain } from 'src/modules/logger/logger';

/**
 * We import the necessary modules from React, including useState, useEffect, and a custom hook called useCustomHook.
 * The MyComponent functional component represents a basic React component.
 * We use the useState hook to declare a state variable called count and its corresponding setter function, setCount. The initial value of count is set to 0.
 * The useEffect hook is used to perform a side effect. In this example, it prints the count to the ocnsole. The effect runs whenever count changes.
 * We demonstrate the usage of a custom hook called useCustomHook. Custom hooks allow us to encapsulate and reuse logic across different components.
 * Within the component's JSX, we render the count state variable and provide a button to increment it.
 * Clicking the "Increment" button triggers the incrementCount function, which updates the count state using the setCount function.
 */
const MyComponent = () => {
  // State example using useState hook
  const [count, setCount] = useState(0);

  // Custom hook example
  // const [data, setData] = useCustomHook();

  // Effect example using useEffect hook
  useEffect(() => {
    logMain.debug(`Count is ${count}`);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default MyComponent;
