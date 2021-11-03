import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Task from "./components/Task";

function App() {
  return (
    <div className="container">
      <Navbar />
      <hr />
      {/* <Timer />
      <hr /> */}
      <Task />
    </div>
  );
}

export default App;
