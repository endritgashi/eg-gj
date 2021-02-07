import React from 'react';
import ThreeDotsMenu from '../../base/ThreeDotsMenu';

const CommentListItem = () => {
    return (
        <div className="d-flex flex-row border-bottom mb-3">
        <div className="d-flex flex-column">
            <h5>Comment title</h5>
            <p className="text-muted">This is comment this is comment this is comment this is comment this is comment</p>
        </div>
        <ThreeDotsMenu />
    </div>
    )
}

export default CommentListItem;