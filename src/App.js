import { useEffect, useState } from "react";
import AddItemBar from "./components/AddItemBar";
import NavBar from "./components/Navbar/Navbar";
import TaskList from "./components/Tasks/TaskList";
import { Container } from "react-bootstrap";
import { getTasks } from "./firebase/firebasedatabase";

function App() {
  const [curr, setCurr] = useState("all");
  const [content, setContent] = useState({
    active: [],
    completed: [],
  });

  useEffect(() => {
    getTasks("active").then((active) => {
      setContent((prevContent) => {
        return { ...prevContent, active };
      });
    });

    getTasks("completed").then((completed) => {
      setContent((prevContent) => {
        return { ...prevContent, completed };
      });
    });
  }, []);

  return (
    <Container>
      <Container className="bg-light shadow p-3 mt-5">
        
        <AddItemBar setContent={setContent} />
     
        <NavBar setCurr={setCurr} curr={curr} />
      
        <TaskList content={content} curr={curr} setContent={setContent} />
      </Container>
    </Container>
  );
}

export default App;
