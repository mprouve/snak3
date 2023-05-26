import React, { FC } from 'react';

/**
 * We import the necessary module from React, React.memo, to enable memoization.
 * The ExpensiveComponent is wrapped with React.memo, which memoizes the component's rendered output based on its props.
 * Inside ExpensiveComponent, we can perform expensive calculations or operations, which are only executed when the component's props change.
 * The component's rendered output is based on the propA and propB values.
 * In the App component, we define the values for propA and propB and pass them as props to the ExpensiveComponent.
 *
 * By memoizing the ExpensiveComponent using React.memo, the component will only re-render when its props (propA or propB) change.
 * If the props remain the same, the component's previous rendered output is reused, optimizing performance by preventing unnecessary
 * re-renders.
 */

interface ExpensiveComponentProps {
  propA: string;
  propB: string;
}

const ExpensiveComponent: FC<ExpensiveComponentProps> = React.memo(({ propA, propB }) => {
  // Expensive calculations or operations

  return (
    <div>
      <p>Prop A: {propA}</p>
      <p>Prop B: {propB}</p>
    </div>
  );
});

const App = () => {
  const propA = 'Value A';
  const propB = 'Value B';

  return (
    <div>
      <ExpensiveComponent propA={propA} propB={propB} />
    </div>
  );
};

export default App;
