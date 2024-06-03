import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Store from "./Store/Store.jsx";
import ShowContent from "./Components/ShowContent.jsx";
function App() {
  return (
    <Store>
      <div className="app-container">
        <Sidebar ></Sidebar>
        <div className="content">
          <Header></Header>
          <ShowContent></ShowContent>
          <Footer></Footer>
        </div>
      </div>
    </Store>
  );
}

export default App;
