import { useState } from "react"

function Home(){


  const[v1,f1]=useState(0)
  const[v2,f2]=useState(0)
  const[v3,f3]=useState(0)
  const[v4,f4]=useState(0)

  const[vv1,ff1]=useState(0)

  function ass(){
          (ff1((parseInt(v1)+parseInt(v2)+parseInt(v3)+parseInt(v4))/4))
  }


  return<>
  
  <div className="form">


    <div className="box">

      <span className='s1'  >
        <label  className='b1' htmlFor="n1">English:</label><input type="text" placeholder="Enter Marks" onChange={(e)=>{f1(e.target.value)}}/>
      </span>
            <span   className='s1'   >
        <label  className='b1' htmlFor="n1">Maths:</label><input type="text" placeholder="Enter Marks" onChange={(e)=>{f2(e.target.value)}}/>
      </span>

      <span   className='s1' >
        <label className='b1' htmlFor="n1">Science:</label><input type="text" placeholder="Enter Marks" onChange={(e)=>{f3(e.target.value)}}/>
      </span>

      <span   className='s1' >
        <label  className='b1'  htmlFor="n1">Computer:</label><input type="text" placeholder="Enter Marks" onChange={(e)=>{f4(e.target.value)}}/>
      </span>

      <button onClick={ass}>calculate</button>
    {vv1}
    </div>


  </div>
 
  </>

}


export default Home