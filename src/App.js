import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import { AddTodoItem } from "./MyComponents/AddTodoItem";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Search } from "./MyComponents/Search";
import "./MyComponents/All.css"

function App() {
  let initTodo;
  if (localStorage.getItem("todoList") === null) initTodo = [];
  else initTodo = JSON.parse(localStorage.getItem("todoList"));

  const [todoList, setTodoList] = useState(initTodo);
  const [searchItem,setSearchItem] = useState('');
  const [searchList, setSearchList] = useState([]);

  let onDelete = (todo) => {
      setTodoList(
        todoList.filter((e) => {
          return e !== todo;
        })
      );
      localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  let onDone = (todo) => {
    alert("You have completed",todo.title," task")
    setTodoList(
      todoList.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  let onAdd = (title, desc) => {
    let sno = 1;
    if (todoList.length !== 0) sno = todoList[todoList.length - 1].sno + 1;
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodoList([...todoList, newTodo]);
  };

  const onSearch = (searchTerm)=>{
    setSearchItem(searchTerm)
    if(searchTerm !== ""){
      const newTodoList = todoList.filter((item)=>{
        return Object.values(item).join().toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchList(newTodoList);
    }
    else{
      setSearchList([]);
    }
  }

  // We use useState in order to update the value of variables without refreshing the screen.

  // useEffect is used because jb hm setTodo ko call krte hai toh wo immediately todos ko change nahi karega
  // useEffect hook ensures that first the setTodo will change then the statements in useEffect hook will be called.
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <Router>
        <Header searchItem={searchItem} onSearch={onSearch}/> 
        <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route path="/" element={
            <>
            <div className="grid-container">
              <div className="grid-child" style={{marginLeft:"60px"}}>
                <AddTodoItem addTodo={onAdd} />
              </div>
              <div className="grid-child">
                <Search todoList={searchList} onDelete={onDelete} onDone={onDone}/>
              </div>
            </div>
            <Todos todos={todoList} onDelete={onDelete} onDone={onDone}/>
            </>
          }>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;