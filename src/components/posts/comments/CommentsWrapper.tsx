import React, { FC } from 'react'
import Input from '../../base/Input';
import CommentsList from '../comments/CommentsList';
import { CommentsWrapperProps } from '../../../interfaces';

const CommentsWrapper: FC<CommentsWrapperProps> = ({ post, showInput }) => {
    return (
        <div className="mr-3">
            {showInput && <Input />}
            <CommentsList id={post.id} showInput={showInput}/>
        </div>
    )
}

export default CommentsWrapper;