import { Link } from "react-router-dom";

function PostItem({ post }) {
  return (
    <div className="post-card">
      <h2>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostItem;