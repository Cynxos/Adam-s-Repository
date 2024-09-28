import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <p>Hello World!</p>
  </React.StrictMode>
);

const myelement = <h1>I Love JSX!</h1>;

root.render(
  <React.StrictMode>
    <p>Hello World!</p>
    {myelement}
  </React.StrictMode>
);

const sum = 5 + 5;

root.render(
  <React.StrictMode>
    <p>Hello World!</p>
    {myelement}
    <p>React is {sum} times better with JSX</p>
  </React.StrictMode>
);

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

root.render(
  <React.StrictMode>
    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>
  </React.StrictMode>
);

import UserFavoriteAnimals from './userFavoriteAnimals';

root.render(
  <React.StrictMode>
    <h3>{user.firstName}</h3>
    <h3>{user.lastName}</h3>
    <UserFavoriteAnimals favAnimals={user.favAnimals} />
  </React.StrictMode>
);

import Exercise from './Exercise3';

root.render(
  <React.StrictMode>
    <Exercise />
  </React.StrictMode>
);

export default App;