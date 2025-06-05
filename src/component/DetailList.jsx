import { useState } from "react"

export default function DetailList (props){
  const[check, setCheck] = useState(false)
  console.log(props)
  
  function removelist(){

  }

  return(
    <div className="mt-5">
        <input className="mr-3 scale-125" type="checkbox" onClick={e => setCheck(!check)}  name="react"/>
        {(check === true) ? <label  className="mr-3 line-through text-xl text-gray-300" id="react">{props.detail.taskName}</label> :  
        <label className="mr-3 text-xl text-white" id="react">{props.detail.taskName}</label>}
        <span className="text-[20px] text-gray-100" onClick={removelist}>x</span>
    </div>
  )
}
