import React from 'react';
import { UserProfile as UserProfileType } from './types';

interface UserProfileProps {
    user: UserProfileType;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '300px' }}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Bio: {user.bio}</p>
        </div>
    );
};

export default UserProfile;
