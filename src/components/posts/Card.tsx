import React, { FC, useEffect, useCallback, useState } from 'react'
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CommentsWrapper from './comments/CommentsWrapper';
import { PostProps, UserProps } from '../../interfaces';

const Card : FC<PostProps> = ({ post }) => {
    const [user, setUser] = useState<UserProps>({
        name: '',
        username: ''
      });
    
      const fetchUser = useCallback(async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        );
        const json = await res.json();
        return json;
      }, [post.userId]);
    
      useEffect(() => {
        fetchUser()
          .then((json) => setUser(json))
          .catch((e) => console.log(e));
      }, [fetchUser]);
  
    return (
        <div className="d-flex flex-column">
            <div className="post container">
                <section className="card bg-white shadow-sm">
                    <CardHeader user={user}/>
                    <CardBody post={post}>
                        <CommentsWrapper post={post} />
                    </CardBody>
                </section>
            </div>
        </div>
    )
}

export default Card;