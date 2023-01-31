import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col } from "antd";
import CommentList from "./CommentList.jsx";
import CommentCreate from "./CommentCreate.jsx";
export default () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <Col span={8} key={post.id}>
        <Card title={post.title} hoverable>
          <p>Card content</p>

          <CommentList comments={post.comments}></CommentList>

          <hr />

          <CommentCreate postId={post.id}></CommentCreate>
        </Card>
      </Col>
    );
  });

  console.log(posts);

  return (
    <div>
      <h1>Post List</h1>

      <div style={{ padding: "0 8px" }}>
        <Row gutter={16}>{renderedPosts}</Row>
      </div>
    </div>
  );
};
