import React, { FC } from 'react';
import ThreeDotsMenu from '../../base/ThreeDotsMenu';
import { CommentProps } from '../../../interfaces';

const CommentListItem: FC<CommentProps> =  ({ comment }) => {
    return (
        <div className="d-flex flex-row border-bottom mb-3">
        <div className="d-flex flex-column">
            <h5>{comment.email}</h5>
            <p className="text-muted">{comment.body}</p>
        </div>
        <ThreeDotsMenu />
    </div>
    )
}

export default CommentListItem;