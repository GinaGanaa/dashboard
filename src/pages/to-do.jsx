import { useState } from "react";
import { todoList } from "@/utils/constants";

export default function Page() {
  const [todos, setTodos] = useState(
    todoList.map((todo) => ({ ...todo, starred: false, checked: false }))
  );
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState("");

  const toggleStarred = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, starred: !todo.starred } : todo
      )
    );
  };

  const toggleChecked = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const addNewTask = () => {
    setIsAdding(true);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { todo: newTask, starred: false, checked: false },
      ]);
      setNewTask("");
      setIsAdding(false);
    }
  };

  return (
    <div className="p-[30px]">
      <div className="flex justify-between pb-[25px]">
        <h2 className="text-[#202224] text-[32px] font-medium">To-Do List</h2>
        <button
          onClick={addNewTask}
          className="w-[147px] h-[48px] bg-[#4379EE] text-white text-[14px] rounded-[6px]"
        >
          Add New Task
        </button>
      </div>

      <div>
        {todos.map((todo, index) => (
          <div key={index} className="pt-[24px]">
            <div className="flex justify-between h-[93px] items-center bg-[#FBFCFF] rounded-[12px] pl-[32px] pr-[31px]">
              <div className="flex gap-[24px] items-center">
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => toggleChecked(index)}
                  className="w-[20px] h-[20px]"
                />
                <p className={todo.checked ? "line-through text-gray-400" : ""}>
                  {todo.todo}
                </p>
              </div>
              <div className="flex gap-[32px]">
                <button
                  className="cursor-pointer"
                  onClick={() => toggleStarred(index)}
                >
                  <img
                    className="w-[26px]"
                    src={
                      todo.starred
                        ? "/inbox/yellowStar.svg"
                        : "/inbox/whiteStar.svg"
                    }
                    alt="Star Icon"
                  />
                </button>
                <button onClick={() => deleteTodo(index)}>
                  <img
                    className="w-[30px]"
                    src="/todo/deleteTodo.svg"
                    alt="Delete Icon"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}

        {isAdding && (
          <div className="flex items-center gap-[24px] pt-[24px] h-[93px] bg-[#FBFCFF] rounded-[12px] pl-[32px] pr-[31px]">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter new task"
              className="flex-1 border border-gray-300 rounded-[6px] p-[10px] text-[16px]"
            />
            <button
              onClick={handleAddTask}
              className="w-[80px] h-[48px] bg-[#4379EE] text-white text-[14px] rounded-[6px]"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
