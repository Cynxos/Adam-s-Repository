import React from 'react';
import Greeting from './Greeting';
import UserCard from './UserCard';
import DataFetcher from './DataFetcher';
import UserProfile from './UserProfile';
import CombinedComponent from './CombinedComponent';

const App: React.FC = () => {
    const user = {
        name: "Alice",
        age: 30,
        bio: "Software engineer with a passion for open-source projects."
    };

    return (
        <div>
            <h1>Welcome to My App</h1>
            <Greeting name="Adam" />

            <UserCard name="Bob" age={25} />
            <UserCard />

            <DataFetcher />

            <UserProfile user={user} />

            <CombinedComponent />
        </div>
    );
};

export default App;
