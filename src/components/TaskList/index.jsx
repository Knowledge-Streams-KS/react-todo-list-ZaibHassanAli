import { useState } from "react";

import Task from "../Task";
function TaskList() {
  const [fieldValue, setFieldValue] = useState("");
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setFieldValue(e.target.value);
  };
  const addTask = () => {
    if (fieldValue != "") {
      setList([...list, fieldValue]);
      setFieldValue("");
    }
  };
  const deleteitem = (id) => {
    const newarr = list.filter((value, index) => {
      return id !== index;
    });
    setList(newarr);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter..."
        onChange={handleChange}
        value={fieldValue}
      />
      <button onClick={addTask}>Add Task</button>
      <p>
        {list.map((value, index) => (
          <>
            <Task task={value} />
            <button onClick={() => deleteitem(index)}>Delete</button>
          </>
        ))}
      </p>
    </>
  );
}

export default TaskList;
