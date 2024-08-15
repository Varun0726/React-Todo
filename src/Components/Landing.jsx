import { useState } from "react";
import {useRecoilState} from "recoil";
import { todos } from "../Store/Todos";
import { useRef } from "react";

export default function Landing(){
return (<>
<div>Welcome to the Todos Application</div>
<AddTodos/>
</>)
}

function AddTodos(){
    const refTitle = useRef();
    const refDescription = useRef();
    const [title,setTitle] = useState();
    const [description,setDescription] = useState()
    const [todo,setTodo] = useRecoilState(todos);
    function Added(){
        console.log("added");
        console.log({
            id:todo.length+1,
            Title:title,
            Description:description,
        Completed:false});
        setTodo([...todo,{
            id:todo.length+1,
            Title:title,
            Description:description,
        Completed:false}]);
            setTitle("");
            setDescription("")
            refTitle.current.value = "";
            refDescription.current.value ="";
    }

    return(<>
    <input type="text" placeholder="Title for the Todo" onChange={(e)=>setTitle(e.target.value)} ref={refTitle}/>
    <br/>
    <input type="text" placeholder="Description of the todo" onChange={(e)=>setDescription(e.target.value)} ref={refDescription}/>
    <br/>
    <button onClick={Added}>Add Todo</button>
    </>)
}