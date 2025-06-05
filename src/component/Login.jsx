import { useState } from 'react'
import {NavLink, useNavigate} from 'react-router'
import {Outlet} from 'react-router'
import axios from "axios";

export default function Login() {
    const [dataId, setdataId] = useState("");
    const [signId, setSignId] = useState([]);
    const [dataPass, setdataPass] = useState("");
    const [signPass, setSignPass] = useState([]);
    let navigate = useNavigate()
    function handleChangeUser(e){
      setdataId(e.target.value)
    }

    function handleChangePass(e){
      setdataPass(e.target.value)
    }

    async function handleSignIn(e){
      e.preventDefault()
      const data = {
        "username": "jane doe",
        "password": "janePassword"
      }
      try{
        const res = await axios.post("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/login", data)
        console.log(res.data)
        console.log(signId)
        console.log(signPass)
        setSignId([...signId, res.data.username])
        setSignPass([...signPass, res.data.password])
        navigate("/todolist")

      }catch(err){
        console.log(err)
      }

  }

  return(
    <div className="">
      <h1 className="mt-15 mb-6 text-3xl text-white font-bold">Welcome</h1>
      <form action="" onSubmit={handleSignIn} >
        <input className="w-md mb-5 p-3 bg-blue-200 text-gray-600 rounded-md placeholder-white" value={dataId} onChange={handleChangeUser} type="text" placeholder="email"/>
        <br />
        <input className="w-md mb-5 p-3 bg-blue-200 text-gray-600 rounded-md placeholder-white" value={dataPass} onChange={handleChangePass} type="text" placeholder="password"/>
        <br />
        <NavLink to={'/todolist'}><button type='submit' className="w-md mb-5 p-3 btn btn-base-content">LOGIN</button></NavLink>
        <br />
      </form>
        <button className="w-md mb-5 p-3 btn btn-base-content">REGISTER</button>
    </div>
  )
}
