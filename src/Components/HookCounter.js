import React, { useEffect, useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    useEffect(()=>{
      document.title = `${count}`
    })

  return (
    <div>
    <div>
    <h1>{count}</h1>
    <button onClick={()=> {
      setCount((previousCount) => previousCount + 1)
      setCount((previousCount) => previousCount+1)}}
    >Click{count}</button>
    </div>

   <div>
    <button onClick={()=> {
      setCount((previousCount) => previousCount -1)}}
    >Click{count}</button>
    </div>
    </div>
  )
}

export default HookCounter

