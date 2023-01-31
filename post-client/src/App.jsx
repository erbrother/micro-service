import React from "react";
import PostCreate from "./pages/PostCreate";
import PostList from "./pages/PostList";
import 'antd/dist/antd.less';

const App = () => {
  return (
    <div>
      <PostCreate></PostCreate>
      <hr />
      <PostList></PostList>
    </div>
  );
};


export default App;
