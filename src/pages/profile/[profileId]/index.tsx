import React from 'react';
import Layout from '../../../containers/Layout';
import UserProfile from '../../../containers/UserProfile';
import { UserModel } from '../../../model';
import UserProfileContent from '../../../components/profile/UserProfileContent';

const Profile = ({ user }: { user: UserModel }) => {
    return (
        <Layout>
            <UserProfile
                username={user.username}
                name={user.name}
            >
                <UserProfileContent
                    company={user.company}
                    address={user.address}
                    email={user.email}
                    phone={user.phone}
                    website={user.website}
                />
            </UserProfile>
        </Layout>
    )
}

Profile.getInitialProps = async (ctx: any) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${ctx.query.profileId}`
    );
    const json = await res.json();
    return { user: json };
};

export default Profile;