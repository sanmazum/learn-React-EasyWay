import React, { useState, useEffect } from "react";
import { createPost, updatePost } from "../services/postService";

export default function PostForm({
  posts,
  setPosts,
  editingPost,
  setEditingPost,
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page reload after submitting the form

    if (editingPost) {
      // edit post
      editPost();
    } else {
      addPost();
    }

    setTitle("");
    setBody("");
    setEditingPost(null);
  };

  // Implementing POST request with Axios
  const addPost = () => {
    createPost({ title, body })
      .then((response) => {
        console.log(response);
        setPosts([...posts, response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editPost = () => {
    updatePost(editingPost.id, { title, body })
      .then((res) => {
        setPosts(
          posts.map((post) => (post.id === editingPost.id ? res.data : post))
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>Title</div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <div>Body</div>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <div>
          <button type="submit">
            {" "}
            {editingPost ? "Edit Post" : "Add Post"}
          </button>
        </div>
      </form>
    </>
  );
}
