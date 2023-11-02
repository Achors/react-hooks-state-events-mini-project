// import React, {useState} from "react";
import Task from "./Task";

function TaskList(tasks) {
  // const [task, setTask] = useState([]);
  




  return (
    <tbody>
    <tr>
      <th>Category</th>
      <th>Text</th>
    </tr>
    
    {tasks.map(task => {
      return (
        <div className="tasks">
      <Task 
      category={task.category}
      text={task.text}
      key={task.id}

       />
        </div>
        )

    })}
    </tbody>
    )    
};

export default TaskList;
