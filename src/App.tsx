import "./App.css";
import ListUsers from "./components/ListUsers";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello Buddy</h1>
      <Link to="manage/user">Add User</Link>
      <ListUsers />
    </>
  );
}

export default App;
