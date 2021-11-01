import Header from "./components/Header";
import Timer from "./components/Timer";
import Task from "./components/Task";

function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <Timer />
      <hr />
      <Task />
    </div>
  );
}

export default App;
