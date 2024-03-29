import { FloatingLabel, FormControl } from "react-bootstrap";
import { addTask } from "../firebase/firebasedatabase";

function AddItemBar(props) {
  const { setContent } = props;

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      const task = {
        description: event.target.value,
        completed: false,
      };
      const key_id = addTask(task, "active");
      setContent((prevContent) => {
        const active = [...prevContent.active, { ...task, id: key_id }];
        return { ...prevContent, active };
      });
      event.target.value = "";
    }
  };
  return (
    <>
      <FloatingLabel
        label="Add Task"
        onKeyDown={handleKeyPress}
        className="mb-3"
      >
        <FormControl placeholder="Add Task" />
      </FloatingLabel>
    </>
  );
}

export default AddItemBar;
