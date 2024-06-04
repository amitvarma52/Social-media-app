import React, { useContext } from "react";
import Post from "./Post";
import { appContext } from "../Store/Store";

const PostList = () => {
  const obj = useContext(appContext);
  if(obj.cardObj.length ===0){
    return <h1 style={{marginLeft:"37%",padding:"40px"}}>no post yet </h1>
  }
  return (
    <>
      {obj.cardObj.map((element) => {
        return (
          <Post
            key={element.id}
            id={element.id}
            title={element.title}
            description={element.description}
            hashtags={element.hashtags}
          ></Post>
        );
      })}
    </>
  );
};

export default PostList;
