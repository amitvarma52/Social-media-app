import React, { useContext } from "react";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import { appContext } from "../Store/Store";

const ShowContent = () => {
  const { show } = useContext(appContext);
  return (
    <>{show == true ? <CreatePost></CreatePost> : <PostList></PostList>}</>
  );
};

export default ShowContent;
