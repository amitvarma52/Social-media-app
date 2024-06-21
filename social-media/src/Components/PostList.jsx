import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { appContext } from "../Store/Store";
import Loading from "./Loading";
import NoPost from "./NoPost";
const PostList = () => {
  const { cardObj, getServerData } = useContext(appContext);
  // const [load, setLoad] = useState(false);

  // useEffect(() => {
  //   setLoad(true);
  //   const controller=new AbortController()
  //   const signal = controller.signal
  //   fetch("https://dummyjson.com/posts",{signal})
  //     .then((res) => res.json())
  //     .then((data) => {
  //       getServerData(data.posts);
  //       setLoad(false);
  //     });
  //    return ()=>{
  //     console.log("component killed ")
  //     controller.abort()
  //    }
  // }, []);

  return (
    <>
      {cardObj.length === 0 && <NoPost/>}
      {
        cardObj.map((element) => {
          return (
            <Post
              key={element.id}
              id={element.id}
              title={element.title}
              description={element.body}
              tags={element.tags}
            ></Post>
          );
        })}
    </>
  );
};

export default PostList;
