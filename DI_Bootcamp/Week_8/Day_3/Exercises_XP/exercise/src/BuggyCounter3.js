import React from 'react';
import ReactDOM from 'react-dom';
import BuggyCounter from './BuggyCounter';

function App() {
  return (
    <div>
      <BuggyCounter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
