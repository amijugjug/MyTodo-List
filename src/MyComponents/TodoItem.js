import React from "react";

export const TodoItem = (props) => {
  return (
    <div class="card my-2" style={{width: "35rem"}}>
      <div class="card-body">
        <h5 class="card-title">{props.todo.title}</h5>
        <p class="card-text">{props.todo.desc}</p>
        <button className='btn btn-success btn-sm' onClick={()=>{props.onDone(props.todo)}}>Done</button> &nbsp;
        <button className='btn btn-danger btn-sm' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
      </div>
    </div>
  );
};
