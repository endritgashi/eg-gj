import React from 'react';
import Link from 'next/link';
import ThreeDotsMenu from '../base/ThreeDotsMenu';

const CardHeader = ({ user }) => {

    return (
        <div className="card-header d-flex flex-row justify-content-between align-items-center bg-white">
            <div className="d-flex flex-row mt-2 mb-2">
                <div className="avatar rounded-circle" />
                <div className="d-flex flex-column pl-3">
                    {user.id ? (
                        <>
                            <Link href={`/profile/${user.id}`}>
                                <a className="post--text">{user.name}</a>
                            </Link>
                            <Link href={`/profile/${user.id}`}>
                                <a className="text-muted">
                                    @{user.username}
                                </a>
                            </Link>
                        </>
                    ) : (
                            <>
                                <span className="post--text">{user.name}</span>
                                <span className="text-muted">
                                    @{user.username}
                                </span>
                            </>
                        )}
                </div>

            </div>
            <ThreeDotsMenu />
        </div>
    )
}
export default CardHeader;