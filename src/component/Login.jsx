import {NavLink} from 'react-router'
import {Outlet} from 'react-router'

export default function Login() {
  return(
    <div className="">
      <h1 className="mt-15 mb-6 text-3xl text-white font-bold">Welcome</h1>
      <form action="">
        <input className="w-md mb-5 p-3 bg-blue-200 text-gray-600 rounded-md placeholder-white" type="email" placeholder="email"/>
        <br />
        <input className="w-md mb-5 p-3 bg-blue-200 text-gray-600 rounded-md placeholder-white" type="text" placeholder="password"/>
        <br />
        <NavLink to={'/todolist'}><button className="w-md mb-5 p-3 btn btn-base-content">LOGIN</button></NavLink>
        <br />
        <button className="w-md mb-5 p-3 btn btn-base-content">REGISTER</button>
      </form>
      <Outlet/>
    </div>
  )
}