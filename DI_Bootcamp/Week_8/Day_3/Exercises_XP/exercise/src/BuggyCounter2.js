import React from 'react';
import ReactDOM from 'react-dom';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
