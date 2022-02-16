import React from 'react'
import { TodoItem } from './TodoItem';

export const Search = (props) => {
  let myStyle = {
    width: "500px",
    height: "175px",
    display: "block",
    overflowY: "scroll",
  };
    return (
    <div className="container my-3" style={myStyle}>
      {props.todoList.length === 0 ? 
        "" : (
        props.todoList.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.sno}
              onDelete={props.onDelete}
              onDone={props.onDone}
            />
          );
        })
      )}
    </div>
  );
}
