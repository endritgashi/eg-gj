import React from 'react'
import Link from 'next/link';

const CardBody = ({ children }) => {
    return (
        <div className="card-body">
            <Link href={`/posts/1`}>
                <a className="post--text">This is title this is title</a>
            </Link>
            <p className="post--text text-muted pt-2">This is title this is title This is title this is title This is title this is title This is title this is title</p>
            {children}
        </div>
    )
}

export default CardBody;