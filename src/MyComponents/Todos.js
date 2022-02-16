import React from 'react'
import {TodoItem} from "./TodoItem";
export const Todos = (props) => {
    let myStyle = {
        width: "600px", 
        height: "365px",
        display : "block",
        overflowY : "scroll"
    }
    return (
        <div className='container '>
        <h3 className='container my-3'>Todos List</h3>
        <div className='container my-3' style={myStyle}>
            {/* Returning todos using higher order map function */}
                {props.todos.length === 0 ? 
                    <p className='text-center'>"No Todo items to display"</p> : 
                    props.todos.map((todo)=>{
                        return <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete} onDone = {props.onDone}/>
                })
                }
        </div>
        </div>
    )
}