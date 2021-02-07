import React from 'react'
import CommmentListItem from './CommentListItem';

const CommentsList = () => {
    return (
        <div className=" d-flex flex-column mt-4 pl-5 pr-5">
            <CommmentListItem />
            <div className="align-self-center">
                <button type="button" className="bg-white text-muted font-weight-bold">Shiko me shume komente</button>
            </div>
        </div>
    )
}
export default CommentsList;