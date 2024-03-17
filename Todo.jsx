import React,{useState} from "react";

function Todo(){

    const [tasks,setTask]=useState(["code","walk"]);
    const [newtasks,setnewtasks]=useState([])

    function handlechange(event){
        setnewtasks(event.target.value)
    }
    function addtask(){
        if(newtasks.trim()!==""){
        setTask(t=>[...t,newtasks]);
        setnewtasks("")
        }
    }
    function deletetask(index){
        const updatedtasks=tasks.filter((_,i)=>i!==index);
        setTask(updatedtasks)
    }
    function moveup(index){
        if(index>0){
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index-1]]=
            [updatedtasks[index-1],updatedtasks[index]]
            setTask(updatedtasks)
        }
    }
    function movedown(index){
        if(index<tasks.length-1){
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index+1]]=
            [updatedtasks[index+1],updatedtasks[index]]
            setTask(updatedtasks)
        } 
    }

    return (
        <div className="display">
            <div className="ans">
            <h1>To - Do - List</h1>
            <input type="text" placeholder="Enter a Task ..." value={newtasks} onChange={handlechange}/>
            <button className="addbtn" onClick={addtask}>Add</button>
            </div>
            
                <ul>
                    {tasks.map((task,index)=><li key={index}>
                    <span className="text">{task}</span>
                    <button className="deletebtn" onClick={()=>deletetask(index)}>Delete</button>
                <button className="moveupbtn" onClick={()=>moveup(index)}>👆</button>
                <button className="movedownbtn" onClick={()=>movedown(index)}>👇</button>
                </li>)}
                
                </ul>
            
                
        </div>
    )
}

export default Todo