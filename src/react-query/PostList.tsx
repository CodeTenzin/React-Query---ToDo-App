import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  const [page, setPage] = useState(1);

  // const { data: posts, error, isLoading } = usePosts(userId);

  const { data: posts, error, isLoading } = usePosts({ page, pageSize });
  return (
    <>
      {error && <p>{error.message}</p>}
      {isLoading && <p>Loading</p>}

      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        className="form-select mb-3"
      >
        <option value=""></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
