import { FC, useState } from 'react';

/**
 * We import the necessary modules from React, including useState for managing state.
 * The MyComponent functional component represents a basic React component.
 * We use the useState hook to declare a state variable called count and its corresponding setter function, setCount. The initial value of count is set to 0.
 * The message variable demonstrates the usage of props, where the component receives a string value from its parent component.
 * Within the component's JSX, we render the message prop and the count state variable.
 * Clicking the "Increment" button triggers the incrementCount function, which updates the count state by calling setCount with the new value.
 */
interface MyComponentProps {
  message: string;
}

const MyComponent: FC<MyComponentProps> = ({ message }) => {
  // State example using useState hook
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{message}</p>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default MyComponent;
