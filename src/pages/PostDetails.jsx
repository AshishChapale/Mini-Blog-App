import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSinglePost() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSinglePost();
  }, [id]);

  if (loading) {
    return <h2>Loading post...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <div className="details-card">
        <h1>Post Details</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p className="post-id">Post ID: {post.id}</p>

        <Link className="back-link" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default PostDetails;