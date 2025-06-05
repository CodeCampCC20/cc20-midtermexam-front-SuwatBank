import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router";
import Login from "../component/Login";
import ToDoList from "../component/ToDoList";

function AppRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="todolist" element={<ToDoList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter