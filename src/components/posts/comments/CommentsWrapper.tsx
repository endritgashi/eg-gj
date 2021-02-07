import React from 'react'
import Input from '../../base/Input';
import CommentsList from '../comments/CommentsList';

const CommentsWrapper = () => {
    return (
        <div className="mr-3">
           <Input />
           <div className="d-flex justify-content-center mt-4 border-bottom">
                <button  type="button" className="bg-white text-muted font-weight-bold mb-3">5 komente</button>
           </div>
           <CommentsList />
        </div>
    )
}

export default CommentsWrapper;