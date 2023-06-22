import React, { useState } from 'react'
import "./Home.css"
const Home = () => {

const [title,settitle]=useState("")
const [fname,setfname]=useState("")

const [mname,setmname]=useState("")
const [lname,setlname]=useState("")

const [Street,setStreet]=useState("")

const [pcode,setpcode]=useState("")


const [city,setcity]=useState("")
const [state,setstate]=useState("")

const [country,setcountry]=useState("")

const [Date,setDate]=useState("")

const [Show,setShow]=useState("")

const [Gender,setGender]=useState("")

const Details=()=>
{
  setShow("Your for is submitted Successfully");
}
  return (
    <div>

       <div class='show-horizontal'>
         Title:: <h1>{title}</h1>
         <input type="checkbox" className='myform'/>
           Mr
        {/* //  onChange={(t)=>settitle(t.target.value)} */}
          <input type="checkbox"/>  Mrs
       </div>

       <div class='show-horizontal'>
         First Name :: <h1>{fname}</h1>
         <input type="text" placeholder='Enter your First Name' className='myform'
   
           onChange={(m)=>setfname(m.target.value)} 
         />
       </div>
       <div class='show-horizontal'>
         Middle Name :: <h1>{mname}</h1>
         <input type="text" placeholder='Enter your Middle name'className='myform'
           onChange={(h)=>setmname(h.target.value)}
         />
       </div>

       <div class='show-horizontal'>
         Last Name :: <h1>{lname}</h1>
         <input type="text" className='myform' placeholder='Enter your LastName'
           onChange={(f)=>setlname(f.target.value)}
         />
       </div>

        <div class='show-horizontal'>
           Street ::  <h1>{Street}</h1>
        <input type="text" placeholder='Enter your Address' className='myform'
         onChange={(Events)=>setStreet(Events.target.value)}
        />
        </div>


       <div class='show-horizontal'>

        PostalCode :: <h1>{pcode}</h1>
   
        <input type="number" placeholder='Enter your ContactNo' className='myform'

         onChange={(g)=>setpcode(g.target.value)}
        />
       </div>
       <div class='show-horizontal'>

         city :: <h1>{city}</h1>

            <input type="text" placeholder='Enter yor City' className='myform'

        onChange={(x)=>setcity(x.target.value)}
       />
</div>

       <div class='show-horizontal'>
           State:: <h1>{state}</h1>
          <input type="text" placeholder='Enter your State' className='myform'
     
          onChange={(y)=>setstate(y.target.value)}
       />

       </div>
       <div class='show-horizontal'>

         Country:: <h1>{country}</h1>
          <select>
            <option>Indian</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        
        <input type="text" className='myform' id='demo'
            onChange={(z)=>setcountry(z.target.value)}
         />

       </div>

       <div class='show-horizontal'>

        DOB:: <h1>{Date}</h1>
         <input type="date" className='myform' id='demo'

          onChange={(Events)=>setDate(Events.target.value)}
         />
       </div>
       <div>
        Gender:: {Gender}
        <input type="radio" name="r1"  className='myform'/> Male
        <input type="radio" name="r1" className='myform'/> Female
        <input type="radio" name="r1"  className='myform'/> other
        
       </div>

       <button onClick={Details} >submit</button>
      <h1>{Show}</h1>
    </div>
  )
}

export default Home