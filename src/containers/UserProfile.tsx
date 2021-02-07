import React from 'react'
import UserProfileHeader from './UserProfileHeader';
import UserProfileNavigation from './UserProfileNavigation';
import UserProfileContent from './UserProfileContent';

const UserProfile = () => {
    return (
        <>
            <UserProfileHeader />
            <UserProfileNavigation />
            <UserProfileContent />
        </>
    )
}

export default UserProfile;