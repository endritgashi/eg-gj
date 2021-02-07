import React from 'react';
import Link from 'next/link';
import ThreeDotsMenu from '../base/ThreeDotsMenu';

const CardHeader = () => {
    const id = 1;
    return (
        <div className="card-header d-flex flex-row justify-content-between align-items-center bg-white">
            <div className="d-flex flex-row">
                <div className="post__image rounded-circle bg-secondary" />
                <div className="d-flex flex-column pl-3">
                    {id ? (
                        <>
                            <Link href={`/profile/${id}`}>
                                <a className="post--text">NAME</a>
                            </Link>
                            <Link href={`/profile/${id}`}>
                                <a className="text-muted">
                                    @username
                                </a>
                            </Link>
                        </>
                    ) : (
                            <>
                                <p className="post--text">NAME</p>
                                <p className="text-muted">
                                    @username
                                </p>
                            </>
                        )}
                </div>
                
            </div>
            <ThreeDotsMenu />
        </div>
    )
}
export default CardHeader;