import { useState } from "react";
import DetailList from "./DetailList"

export default function ToDoList(){
  const[list, setList] = useState("");
  const[sendList, setSendList] = useState([]);
  const[key, setKey] = useState("");

  function handleChange(e){
    setList(e.target.value)
  }

  function handleKeyDown(e){
      setKey(e.key);
      (key === "Enter") ? handleSubmit() : null

  }

  function handleSubmit(e){
    e.preventDefault()
    setSendList([...sendList, list])
    setList("")

  }

  return(
    <div className="flex flex-col" onKeyDown={handleKeyDown}>
      <h1 className="my-5 text-4xl text-white">My Todo</h1>
        <form onSubmit={handleSubmit} className="flex flex-col" action="">
          <input className="border-b border-white mb-4 pt-3 text-xl text-white" type="text" placeholder="new task" value={list} onChange={handleChange}/>
        </form>

        {sendList.map((list) =>(
          <DetailList detail = {list}/>
        ))}
    </div>
  )
}