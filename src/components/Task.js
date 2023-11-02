import React from "react";

function Task({category, text}) {
  return (
    <div className="task">    
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
      <tr>
      <td>{category}</td>
      <td>{text}</td>
    </tr>
    </div>
  );
}

export default Task;
