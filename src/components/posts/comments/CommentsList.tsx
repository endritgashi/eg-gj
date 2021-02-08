import React, { FC, useCallback, useEffect, useState } from 'react';
import CommmentListItem from './CommentListItem';
import { CommentsProps } from '../../../interfaces';
import { CommentModel } from '../../../model';

const CommentsList: FC<CommentsProps> = ({ id }) => {
    // const [showComments, setShowComments] = useState<boolean>(withInput);
    const [comments, setComments] = useState<CommentModel[]>([]);
    const [show, setShow] = useState<number>(1);

    const showMore = () => setShow(show + 2);

    const fetchUser = useCallback(async () => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        const json = await res.json();
        return json;
    }, [id]);

    useEffect(() => {
        fetchUser()
            .then((json) => setComments(json))
            .catch((e) => console.log(e));
    }, [fetchUser]);

    // const _showComments = () => setShowComments(true);

    return (
        <>
            <div className="d-flex justify-content-center mt-4 border-bottom">
                <button type="button" className="bg-white text-muted font-weight-bold mb-3"> {comments.length} komente</button>
            </div>
            <div className=" d-flex flex-column mt-4 pl-5 pr-5">
                {
                    comments.map((comment, index) => (
                        index <= show && <CommmentListItem key={comment.id} comment={comment}/>
                    ))
                }
                {show < comments.length && (
                    <div className="align-self-center">
                        <button
                            type="button"
                            className="general-color bg-white font-weight-bold"
                            onClick={showMore}
                        >
                            Shiko më shumë komente
                            </button>
                    </div>
                )}
            </div>
        </>
    )
}
export default CommentsList;