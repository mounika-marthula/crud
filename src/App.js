import React , {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Form from './components/form';
import Outputlist from './components/outputlist';
import Crud from './components/crud';
import Apifetch from './Api-fetch';
import Axios from './Axios';
import Usefilter from './components/usefilter';
import Usecontext from './components/usecontext';

function App() {
  const initialState =JSON.parse(localStorage.getItem("output")) ||[];
  const[input,setInput]=useState(""); 
  const[output,setOutput]=useState(initialState);
  const[edit,setEdit]=useState(null);
  useEffect(()=>{
    localStorage.setItem(output, JSON.stringify(output));
  },[output]);
  useEffect(()=>{
    if(edit){
      setInput(edit.title);
    }else{
      setInput("");
    }
  },[setInput,edit]
  );
  return (
    <div>
    <div className="App">
 <Header />
     </div>
     <div>
      <Form
      input={input}
      setInput={setInput}
      output={output}
      setOutput={setOutput}
      edit={edit}
      setEdit={setEdit} />
      <div>
        <Outputlist
         output={output}
         setOutput={setOutput}
         setEdit={setEdit}
         />
      </div>
     </div>
    <div>
      <Crud />
    </div>
    <div>
      <Usefilter />
      <Usecontext />
    </div>
     </div>
  );
}

export default App;
