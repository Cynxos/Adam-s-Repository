import React from 'react';

interface UserCardProps {
    name?: string;
    age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '200px' }}>
            {name && age ? (
                <div>
                    <h2>{name}</h2>
                    <p>Age: {age}</p>
                </div>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};

export default UserCard;
