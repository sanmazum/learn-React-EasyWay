import axios from "axios";

// creating axios object instance that we call "api" and send request
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getPosts = () => api.get("/posts");
const deletePosts = (id) => api.delete(`/posts/${id}`);
const createPost = (post) => api.post("/posts", post);
const updatePost = (id, post) => api.put(`/posts/${id}`, post);

export { getPosts, deletePosts, createPost, updatePost };
