import React from 'react'
import Layout from '../../containers/Layout';
import Card from '../../components/posts/Card';
import { PostModel } from '../../model/PostMode.model';

const SinglePost = ({ post }: { post: PostModel }) => {
  return (
    <Layout>
      <div className="mb-5">
        <Card post={post} />
      </div>
    </Layout>
  );
};

SinglePost.getInitialProps = async (ctx: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.query.postId}`
  );
  const post = await res.json();
  return { post };
};
export default SinglePost;
