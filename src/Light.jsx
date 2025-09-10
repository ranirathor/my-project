import React, { useState } from 'react'

const Light = () => {

const[x,setx]=useState(true)

  return (
    <div>
        <button onClick={()=>{setx(!x)}}>On</button>

        {<div className="dd1"  style={{backgroundColor:x==true?"blue":"Green"}}>Tiger </div>}

    </div>
  )
}

export default Light