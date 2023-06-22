import React,{useState} from 'react';

const Container = () => {

    const[Demo,setDemo]=useState("Java Developer");
      
    //changing the value of variable demo
    const react=()=>   
    {
        setDemo("React Developer");
    };
  return (
   
   <div style={{padding:"50px"}}>
    
     <div 

      onClick={react}
      style={{border:"2px solid red",padding:"10px",width:"200px"}}

    >

<p>change the button</p>
     {Demo}
</div>
    </div>
  );
}

export default Container