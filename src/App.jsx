import Navbar from "./components/Navbar";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <>
      <div
        className="fluid-container"
        style={{ backgroundColor: "#F2F4F3", height: "100%" }}
      >
        <Navbar />
        <ToDoList />
      </div>
    </>
  );
}

export default App;
