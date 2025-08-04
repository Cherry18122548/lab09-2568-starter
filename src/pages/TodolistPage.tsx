import TaskCard from "../components/TaskCard";
import TodoModal from "../components/Modal";
import { type TaskCardProps } from "../libs/Todolist";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<TaskCardProps[]>([
    {
      id: "1",
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: "2",
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: false,
    },
  ]);

  const handleAdd = (newTask: TaskCardProps) => {
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const deleteTask = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const toggleDoneTask = (taskId: string) => {
    const newTasks = tasks.map((todo) =>
      todo.id === taskId ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTasks(newTasks);
  };

  // นับจำนวนรายการทั้งหมดและจำนวนรายการที่เสร็จแล้ว
  const totalCount = tasks.length;
  const doneCount = tasks.filter((task) => task.isDone).length;

  return (
    <div className="col-12 m-2 p-0">
      <div className="container text-center">
        <h2>Todo List</h2>
        {/* แสดงจำนวนรายการ */}
        <span className="m-2">
          All : {totalCount} Done : {doneCount}
        </span>

        {/* ปุ่มเปิด Modal */}
        <button
          type="button"
          className="btn btn-primary my-3"
          data-bs-toggle="modal"
          data-bs-target="#todoModal"
        >
          Add
        </button>

        {/* Modal for adding new task */}
        <TodoModal onAdd={handleAdd} />

        {/* แสดงรายการ Task */}
        <>
          {tasks.map((task) => (
            <TaskCard
              id={task.id}
              title={task.title}
              description={task.description}
              deleteTaskFunc={deleteTask}
              toggleDoneTaskFunc={toggleDoneTask}
              isDone={task.isDone}
              key={task.id}
            />
          ))}
        </>
      </div>
    </div>
  );
}

export default App;
