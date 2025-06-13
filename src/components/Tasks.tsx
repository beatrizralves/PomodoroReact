import React, { useState } from "react";
import "./Tasks.css";

type Task = {
  text: string;
  completed: boolean;
};

const Tasks: React.FC = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleAddTask = () => {
    const trimmed = newTask.trim();
    if (trimmed !== "") {
      setTaskList([...taskList, { text: trimmed, completed: false }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const toggleCompleteTask = (index: number) => {
    setTaskList(
      taskList.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-container">
      <div className="task-header">Tasks</div>
      <hr className="task-separator" />
      <div className="add-task-row">
        <input
          className="task-input"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Name Task"
        />
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <hr className="task-separator" />
      <ul className="task-list">
        {taskList.map((task, index) => (
          <li key={index} className="task-item">
            <div className="task-left">
              <input
                className="checkbox"
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleteTask(index)}
              />
              <span
                className={`task-text ${task.completed ? "completed" : ""}`}
              >
                {task.text}
              </span>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
