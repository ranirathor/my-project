import { useState } from "react"
import "./Form.css"



function Form(){

const[n1,setn1]=useState('')
const[a1,seta1]=useState([])

function aa(){
  const ab=[...a1,n1]
  seta1(ab)
}


  return<>
  
  
  <div className="one">


      <div className="two">

        <span>
          <label htmlFor=""></label><input type="text"  onChange={(e)=>{setn1(e.target.value)}} />
        </span>
      
        <button onClick={aa}> Enter</button>
        
        <div className="three">

          <table>
          {a1.map((item)=><tr>{item}</tr>)}
          </table>

        </div>

      </div>



    
  </div>
  
  
  
  </>



}


export default Form