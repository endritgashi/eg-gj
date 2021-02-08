import React, { useState, FC, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../../containers/Layout';
import UserProfile from '../../../containers/UserProfile';
import { UserModel } from '../../../model';
import GalleryItem from '../../../components/profile/GalleryItem';

const Gallery = ({ user }: { user: UserModel }) => {
    const [show, setShow] = useState<number>(12);
    const [photos, setPhotos] = useState([]);
    const {
        query: { profileId }
    } = useRouter();

    const fetchPosts = useCallback(async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${profileId}/photos`
        );
        const json = await res.json();
        return json;
    }, [profileId]);

    useEffect(() => {
        fetchPosts()
            .then((json) => setPhotos(json))
            .catch((e) => console.log(e));
    }, [fetchPosts]);

    const showMore = () => setShow(show + 12);

    return (
        <Layout
            title="Gallery"
            url={`/profile/${user.id}/gallery`}
            keywords="profile, user, posts, single post, gallery, photos images"
        >
            <UserProfile
                username={user.username}
                name={user.name}
            >
                <div className="container mt-5 mb-5">
                    <div className="row">
                        {photos.map(
                            (el, index) =>
                                index + 1 <= show && (
                                    <GalleryItem key={el.id} url={el.url} thumbnail={el.thumbnailUrl} />
                                )
                        )}
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <button
                        type="button"
                        className="view-more rounded btn-lg text-dark"
                        onClick={showMore}
                    >
                        Shiko më shumë foto
                </button>
                </div>
            </UserProfile>
        </Layout>
    )
}

Gallery.getInitialProps = async (ctx: any) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${ctx.query.profileId}`
    );
    const json = await res.json();
    return { user: json };
};

export default Gallery;