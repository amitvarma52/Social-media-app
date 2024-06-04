import React, { useContext, useRef } from "react";
import { MdDelete } from "react-icons/md";
import { appContext } from "../Store/Store";
const Post = ({ id, title, description, hashtags }) => {
  const { handleDeletePost } = useContext(appContext);
  const deleteItem = useRef();
  const [...hashtagsArr] = hashtags.split(" ");
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <span
            onClick={(e) => {
              handleDeletePost(id);
            }}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-btn"
          >
            <MdDelete size={20} />
          </span>
          <h5 className="card-title" ref={deleteItem}>
            {title}
          </h5>
          <p className="card-text">{description}</p>

          {hashtagsArr.map((element) => (
            <span
              key={element}
              className="badge rounded-pill text-bg-warning hastags"
            >
              {element}
            </span>
          ))}
          <div className="alert alert-info reactions" role="alert">
            This post has been reacted by 3 people
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
