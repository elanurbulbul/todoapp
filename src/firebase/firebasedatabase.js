import { get, push, ref, remove, set } from "firebase/database";
import { database } from "./firebaseinit";

export const addTask = (task, status) => {
  const databaseRef = ref(database, status);
  const newTask = push(databaseRef);

  set(newTask, {
    description: task.description,
    completed: task.completed,
  });

  return newTask.key;
};

export const getTasks = async (status) => {
  const databaseRef = ref(database, status);
  try {
    const snapshot = await get(databaseRef);
    const active = [];
    if (snapshot.exists()) {
      const tasks = snapshot.val();
      for (let id in tasks) {
        const task = {
          id: id,
          description: tasks[id]["description"],
          completed: tasks[id]["completed"],
        };
        active.push(task);
      }
    } else {
      console.log("No data available");
    }
    return active;
  } catch (error) {
    console.error(error);
  }
};

export const completeTask = (task) => {
  const databaseRef = ref(database, `active/${task.id}`);

  remove(databaseRef);
  addTask(task, "completed");
};
