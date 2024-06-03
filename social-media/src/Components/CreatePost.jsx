import React, { useContext, useState } from "react";
import { appContext } from "../Store/Store";

const CreatePost = () => {
  const { handleAddPost } = useContext(appContext);
  const [title, setTitle] = useState("");
  const [hashtags,setHashTags]=useState("")
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    handleAddPost(title, description,hashtags);
    setTitle("")
    setDescription("")
    setHashTags("")
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Post Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">description</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hashtags</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={hashtags}
            onChange={(e) => {
              setHashTags(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
