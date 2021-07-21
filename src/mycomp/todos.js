import React from 'react'
import {Todo} from "../mycomp/Todo";

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

export const Todos = (props) => {
    let mystyle={
        "min-height":"30vh",
        "background-color":"rgb(173, 214, 255)"
    };
    return (
       <div style={mystyle} className="container">
           <h3 className='my-3'>
               ToDOS-LIST
           </h3>
           {props.todos.length===0? "No Todos to display":
           props.todos.map((todo)=>{
               return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
           })
           }
       </div>
    )
}
