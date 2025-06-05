import { useState } from "react";
import DetailList from "./DetailList"
import axios from "axios";
import { object } from "yup";

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

  async function handleSubmit(e){
    e.preventDefault()
    const data = {
      "taskName" : list,
      "userId" : 34
    }
    try{
      const res = await axios.post("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos", data)
      console.log(res.data)
      console.log(sendList)
      setSendList([...sendList, res.data.todo])
      setList("")

    }catch(err){
      console.log(err)
    }


  }
// console.log(sendList, 'dlkjjpojpn')
  return(
    <div className="flex flex-col" onKeyDown={handleKeyDown}>
      <h1 className="my-5 text-4xl text-white">My Todo</h1>
        <form onSubmit={handleSubmit} className="flex flex-col" action="">
          <input className="border-b border-white mb-4 pt-3 text-xl text-white" type="text" placeholder="new task" value={list} onChange={handleChange}/>
        </form>

        {sendList.map((list) =>(
          <DetailList key={list.id} detail = {list}/>
        ))}
    </div>
  )
}