import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => {
  return useQuery<Post[], Error>({
    // /users/1/posts
    queryKey: ["users", userId, "posts"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: { userId },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1_000,
  });
};

export default usePosts;
