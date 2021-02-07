import React, { FC } from 'react';
import UserProfileHeader from '../components/profile/UserProfileHeader';
import UserProfileNavigation from '../components/profile/UserProfileNavigation';
import { ProfileProps } from '../interfaces';

const UserProfile: FC<ProfileProps> = ({ address, company, email, name, username, id, phone, website , children}) => {
    return (
        <>
            <div className='profile-container pt-4'>
                <UserProfileHeader />
                <UserProfileNavigation />
            </div>
            {children}
        </>
    )
}

export default UserProfile;