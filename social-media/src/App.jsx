import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app-container">
      <Sidebar show={show} setShow={setShow}></Sidebar>
      <div className="content">
        <Header></Header>
        {show == true ? <CreatePost></CreatePost> : <PostList></PostList>}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
