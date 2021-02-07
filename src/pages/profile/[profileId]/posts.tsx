import React from 'react';
import Layout from '../../../containers/Layout';
import UserProfile from '../../../containers/UserProfile';
import { UserModel } from '../../../model';
import UserProfileContent from '../../../components/profile/UserProfileContent';
import UserPosts from '../../../containers/UserPosts';

const Profile = ({ user }: { user: UserModel }) => {
    console.log(user, "In profile")
    return (
        <Layout>
            <UserProfile 
                company={user.company}
                address={user.address}
                email={user.email}
                username={user.username}
                phone={user.phone}
                website={user.website}
                id={user.id}
                name={user.name}
                >
                    <UserPosts name="name" username="username"/>
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