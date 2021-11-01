import Header from "./components/Header";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="container">
      <Header />
      <hr />
      <Timer />
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Task List</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Task Name</span>
              <button className="btn btn-danger btn-sm float-right mx-2">Delete</button>
              <button className="btn btn-warning btn-sm float-right">Edit</button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Form</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
