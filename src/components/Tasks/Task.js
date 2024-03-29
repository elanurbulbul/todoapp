import { FormCheck, ListGroupItem } from "react-bootstrap";
import { completeTask } from "../../firebase/firebasedatabase";

function Task(props) {
  const { task, setContent } = props;
  const { description, completed } = task;

  const handleOnChange = () => {
    task.completed = true;
    completeTask(task);
    setContent((prevContent) => {
      const completed = [...prevContent.completed, task];
      const active = prevContent.active.filter((item) => item !== task);
      return { completed, active };
    });
  };
  const backgroundColor = completed ? "bg-success" : "bg-danger"; // Renk seçimi
  return (
    <ListGroupItem className={`${backgroundColor} border-0 text-light `}>
      <FormCheck
        inline
        type="checkbox"
        disabled={completed}
        onChange={handleOnChange}
        checked={completed}
      />
      
        {description}
      
    </ListGroupItem>
  );
}

export default Task;
