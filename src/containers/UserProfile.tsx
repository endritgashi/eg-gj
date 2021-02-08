import React, { FC } from 'react';
import UserProfileHeader from '../components/profile/UserProfileHeader';
import UserProfileNavigation from '../components/profile/UserProfileNavigation';

const UserProfile = ({  name = '', username = '', children }) => {
    return (
        <>
            <div className='profile-container pt-1'>
                <UserProfileHeader name={name} username={username}/>
                <UserProfileNavigation />
            </div>
            {children || ''}
        </>
    )
}

export default UserProfile;