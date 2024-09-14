import axios from "axios";

// creating axios object instance that we call "api" and send request
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getPosts = () => api.get("/posts");
const deletePosts = (id) => api.delete(`/posts/${id}`);

export { getPosts, deletePosts };
