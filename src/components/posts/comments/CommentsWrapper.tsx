import React, { FC } from 'react'
import Input from '../../base/Input';
import CommentsList from '../comments/CommentsList';
import { CommentsWrapperProps } from '../../../interfaces';

const CommentsWrapper: FC<CommentsWrapperProps> = ({ post }) => {
    return (
        <div className="mr-3">
            <Input />
            <CommentsList id={post.id}/>
        </div>
    )
}

export default CommentsWrapper;