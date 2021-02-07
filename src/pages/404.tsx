import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__container--title">Error 404</h1>
                <div>
                    The page you are looking for is not found, please
                     <Link href="/">
                        <a className="not-found__container--link ml-2">
                            Go to dashboard
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;