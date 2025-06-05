import { useState } from "react"

export default function DetailList ({setAllList, allList, detail}){
  const[check, setCheck] = useState(false)
  
  function removelist(){
    setAllList(allList.filter((list) => list.id !== detail.id))
  }

  return(
    <div className="mt-5">
        <input className="mr-3 scale-125" type="checkbox" onClick={e => setCheck(!check)}  name="react"/>
        {(check === true) ? <label  className="mr-3 line-through text-xl text-gray-300" id="react">{detail.taskName}</label> :  
        <label className="mr-3 text-xl text-white" id="react">{detail.taskName}</label>}
        <span className="text-[20px] text-gray-100" onClick={removelist}>x</span>
    </div>
  )
}
