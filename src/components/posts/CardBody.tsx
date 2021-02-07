import React, { FC } from 'react'
import Link from 'next/link';
import { PostProps } from '../../interfaces';

const CardBody: FC<PostProps> =  ({ children , post}) => {
    return (
        <div className="card-body">
            <Link href={`/posts/${post.id}`}>
                <a className="post--text">{post.title}</a>
            </Link>
            <p className="post--text text-muted pt-2">{post.body}</p>
            {children}
        </div>
    )
}

export default CardBody;