import React, { useState, useEffect } from "react";

import { getPosts } from "../services/postService";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // console.log("Load Posts"); - To check whether the effect is working perfect or not
    // using external API to get all the posts
    // Posts gets loaded asynchrnously as it's a promise - but we have no acces to actual response value
    // const response = getPosts();
    // console.log(response);

    getPosts()
      .then((res) => {
        // accesing the result of the promise
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>
        <h1> What Posts do we have ? </h1>
        <ul>
          {posts.map((p) => (
            <li key={p.id}>
              <h2>{p.title}</h2>
              <p> {p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
