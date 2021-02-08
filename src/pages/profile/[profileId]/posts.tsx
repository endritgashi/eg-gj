import React from 'react';
import Layout from '../../../containers/Layout';
import UserProfile from '../../../containers/UserProfile';
import { UserModel } from '../../../model';
import UserPosts from '../../../containers/UserPosts';

const Profile = ({ user }: { user: UserModel }) => {
    return (
        <Layout
            title="Posts"
            url={`/profile/${user.id}/posts`}
            keywords="profile, user, posts, single post, user posts"
        >
            <UserProfile
                username={user.username}
                name={user.name}
            >
                <UserPosts />
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