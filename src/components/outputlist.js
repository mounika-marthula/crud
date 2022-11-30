import React from 'react'

const output = ({output,setOutput,setEdit}) => {
  const handleDelete=({id})=>{
    setOutput(output.filter((outpu)=> outpu.id !==id));
  };
  const handleEdit=({id})=>{
    const findoutpu = output.find((outpu)=>outpu.id === id);
    setEdit(findoutpu);
  }
  
  return (
    <div className='bg-success addform'>
      {output.map((outpu)=>(
      <li  key={outpu.id} className="text-center mt-5">
        <input type='text' value={outpu.title}  onChange={(event)=>event.preventDefault("")} />
       
        <button className='edit' onClick={()=>handleEdit(outpu)}>
          Edit
        </button>
        <button className="delete"  onClick={() => handleDelete(outpu)}>
          delete
        </button>
        
      
      </li>
      )
      )}
  
        
      
    </div>
  );
};

export default output;
