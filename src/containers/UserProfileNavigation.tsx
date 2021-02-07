import React from 'react';
import { useRouter } from 'next/router';

import NavLink from '../components/base/NavLink';

const ProfileNavbar = () => {
    const {
        query: { profileId }
    } = useRouter();

    return (
        <ul className="container d-flex flex-row justify-content-around mt-5">
            <NavLink href={`/profile/${profileId}`}>Profili</NavLink>
            <NavLink href={`/profile/${profileId}/posts`}>Postimet</NavLink>
            <NavLink href={`/profile/${profileId}/gallery`}>Galeria</NavLink>
        </ul>
    );
};

export default ProfileNavbar;
