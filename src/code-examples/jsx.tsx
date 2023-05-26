import { logMain } from 'src/modules/logger/logger';

// Example functional component using JSX
/**
 * We define a functional component called MyComponent using an arrow function.
 * Inside the component, we declare two variables: name and message.
 * The component's return statement uses JSX to define the structure and content of the rendered output.
 * The JSX expression includes HTML-like syntax with curly braces {} for embedding dynamic JavaScript values.
 * We use curly braces {name} to interpolate the value of name variable within the h1 tag.
 * Similarly, we interpolate the message variable within the p tag.
 * We attach an event handler to the button element using the onClick attribute.
 * The event handler logs a message to the console when the button is clicked.
 * Finally, we export the MyComponent as the default export. */
const MyComponent = () => {
  const name = 'John Doe';
  const message = 'Welcome to React!';

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>{message}</p>
      <button onClick={() => logMain.debug('Button clicked!')}>Click me</button>
    </div>
  );
};

export default MyComponent;
