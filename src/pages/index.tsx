import React, { useState } from 'react'
import Layout from '../containers/Layout';
import Card from '../components/posts/Card';
import CreatePost from '../components/posts/CreatePost';
import { PostModel } from '../model/PostMode.model';

const Home = ({ posts }: { posts: PostModel[] }) => {
  const [postsNumber, setPostsNumber] = useState<number>(10);
  const showMore = () => setPostsNumber(postsNumber + 10);

  return (
    <Layout>
      <CreatePost />
      {posts.map(
        (el, index) =>
          index + 1 <= postsNumber && (
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

Home.getInitialProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  return { posts };
};

export default Home;
