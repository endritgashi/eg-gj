import React, { useState, FC, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../containers/Layout';
import Card from '../components/posts/Card';
import CreatePost from '../components/posts/CreatePost';
import { PostModel } from '../model/PostMode.model';
import { UserPostsProps } from '../interfaces';

const UserPosts: FC<UserPostsProps> = ({ name, username }) => {
    const [show, setShow] = useState<number>(1);
    const [posts, setPosts] = useState<Array<PostModel>>([]);
    const {
      query: { profileId }
    } = useRouter();
  
    const fetchPosts = useCallback(async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${profileId}/posts`
      );
      const json = await res.json();
      return json;
    }, [profileId]);
  
    useEffect(() => {
      fetchPosts()
        .then((json) => setPosts(json))
        .catch((e) => console.log(e));
    }, [fetchPosts]);
  
    const showMore = () => setShow(show + 1);

  return (
    <Layout>
      <CreatePost />
      {posts.map(
        (el, index) =>
          index + 1 <= show && (
            <Card key={el.id + el.userId} post={el} />
          )
      )}
      <div className="d-flex justify-content-center mt-5 mb-5">
        <button
          type="button"
          className="btn btn-secondary rounded btn-lg text-dark"
          onClick={showMore}
        >
          Shiko më shumë postime
        </button>
      </div>
    </Layout>
  )
}

export default UserPosts;
