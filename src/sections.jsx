import "./sections.css";
import { useState } from "react";



export  function Section(){
    const [toDos,setState] = useState([]);
    const [toDo,setToDo] = useState("");
    const [id,setid]=useState(0);
    return (
        <div className="section">
            <div className="section1">
                <h2>
                    ToDo List
                </h2>
                <div className="inputbox">
                    <input className="inputarea" type="text" placeholder="Enter your ToDo" 
                    onChange={
                        (e)=>{
                            var obj = {
                                "id" : id,
                                "todo": e.target.value,
                                "done": false,
                                "del":false
                            }
                            setToDo(obj);
                            
                        }
                    }/>
                    <button onClick={()=>{
                        setState([...toDos,toDo]);
                        setid(id+1);
                        }
                        }>add</button>
                </div>
                <div className="todos">
                {
                    toDos.filter((todo_obj)=>(todo_obj.done===false&&todo_obj.del===false)).map(filterToDo=>{
                        return (
                            <div className="todoitem">
                                <div className="todostatus" >
                                    <input type="checkbox" checked={filterToDo.done} 
                                    onChange={(e)=>{
                                        const newtodo = [...toDos];
                                        const todo_obj = newtodo.find(
                                        todo_ => todo_.id === filterToDo.id
                                        );
                                        
                                        todo_obj.done = e.target.checked;
                                        setState(newtodo);
                                        
                                    }}/>
                                </div>
                                <div className="todo">
                                    <p>{filterToDo.todo.toString()}</p>
                                </div>
                                <div className="delete">
                                    <button className="delBut" onClick={
                                        (e)=>{
                                        const newtodo = [...toDos];
                                        const todo_obj = newtodo.find(
                                        todo_ => todo_.id === filterToDo.id
                                        );
                                        todo_obj.del = true;
                                        setState(newtodo);
                                    }
                                    }>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div className="section2">
                <h2>
                    ToDo done List
                </h2>
                <div>
                    {
                    
                    toDos.filter((todo_obj)=>(todo_obj.done===true&&todo_obj.del===false)).map(filterToDo=>{
                            
                            return (
                            <div className="todoitem">
                                <div className="todostatus" >
                                    <input type="checkbox" checked={filterToDo.done} 
                                    onChange={(e)=>{
                                        const newtodo = [...toDos];
                                        const todo_obj = newtodo.find(
                                        todo_ => todo_.id === filterToDo.id
                                        );
                                        
                                        todo_obj.done = e.target.checked;
                                        setState(newtodo);
                                        
                                    }}/>
                                </div>
                                <div className="todo">
                                    <p>{filterToDo.todo.toString()}</p>
                                </div>
                                <div className="delete">
                                    <button className="delBut" onClick={
                                        (e)=>{
                                        const newtodo = [...toDos];
                                        const todo_obj = newtodo.find(
                                        todo_ => todo_.id === filterToDo.id
                                        );
                                        todo_obj.del = true;
                                        setState(newtodo);
                                    }
                                    }>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    )
                    }
                </div>
                
            </div>
            <div className="section3">
                <h2>
                    ToDo deleted List
                </h2>
                <button className="delBut" onClick={
                            ()=>{
                            setState(toDos.filter((todo_obj)=>todo_obj.del===false));
                        }
                    }>
                    Delete all
                </button>
                <div>
                    {
                        toDos.filter((todo_obj)=>todo_obj.del===true).map(filterToDo=>{
                                return (
                                <div className="todoitem">
                                    <div className="todostatus" >
                                        <input type="checkbox" checked={filterToDo.done} 
                                        />
                                    </div>
                                    <div className="todo">
                                        <p>{filterToDo.todo.toString()}</p>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    );
}



