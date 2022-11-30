import React from 'react'

import {v4 as uuidv4} from "uuid";
const form = ({input ,setInput,output,setOutput,edit,setEdit}) => {
    const updateoutpu =(title, id, completed) =>{
        const newtodo= output.map((outpu)=>outpu.id === id ? {title,id,completed}: outpu
        );
        setOutput(newtodo);
        setEdit("");
    };
  
   const onInputChange = (event)=>{
    setInput(event.target.value);
   };
   const onFormSubmit =(event)=>{
    event.preventDefault();
    if(!edit){
    setOutput([...output, {id: uuidv4(), title:input,completed:false }]);
    setInput("");
    }else{
        updateoutpu(input,edit.id, edit.completed)
    }
   }
  return (
    <form onSubmit={onFormSubmit} className="addform">
    <div className="bg-primary mt-5 text-center">
      <input type="text" placeholder='enter name' className='task-input' value={input} required onChange={onInputChange} />
      
    
      <button type="submit" className='edit'>
        {edit ? "OK": "Add"}
      </button>
    </div>
    <div>
        </div>
    </form>
  )
}

export default form;
