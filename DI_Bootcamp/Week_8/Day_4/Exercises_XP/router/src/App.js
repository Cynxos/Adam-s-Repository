import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';

const HomeScreen = () => <h1>home</h1>;
const ProfileScreen = () => <h1>profile</h1>;
const ShopScreen = () => {
  throw new Error('shop');
};

async function sendData() {
  const url = 'https://webhook.site/e6dc5fda-3d48-4ba8-b5d2-c7312583b7e0';
  const data = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
          <NavLink className="nav-link" to="/example1">Example1</NavLink>
          <NavLink className="nav-link" to="/example2">Example2</NavLink>
          <NavLink className="nav-link" to="/example3">Example3</NavLink>
        </div>
      </nav>
      <button onClick={sendData}>Send Data</button>
      <Routes>
        <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
        <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
        <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
        <Route path="/example1" element={<Example1 />} />
        <Route path="/example2" element={<Example2 />} />
        <Route path="/example3" element={<Example3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
