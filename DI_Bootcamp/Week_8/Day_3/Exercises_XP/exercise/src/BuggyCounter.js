import React from 'react';
import ReactDOM from 'react-dom';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <BuggyCounter />
      <BuggyCounter />
    </ErrorBoundary>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
