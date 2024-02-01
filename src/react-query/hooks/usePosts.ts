import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

// const usePosts = (userId: number | undefined) => {
const usePosts = (query: PostQuery) => {
  return useQuery<Post[], Error>({
    // /users/1/posts
    // queryKey: ["users", userId, "posts"],
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          // params: { userId },
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1_000,
  });
};

export default usePosts;
