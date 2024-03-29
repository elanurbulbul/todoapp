import { ListGroup } from "react-bootstrap";
import Task from "./Task";

function TaskList(props) {
  const { content, curr, setContent } = props;
  const { active, completed } = content;
  const list = curr === "all" ? active.concat(completed) : content[curr];

  return (
    <ListGroup>
      {list.map((task) => {
        return <Task key={task.id} task={task} setContent={setContent} />;
      })}
    </ListGroup>
  );
}

export default TaskList;
