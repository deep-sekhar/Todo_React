import React from 'react'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

export const Todo = ({todo,onDelete}) => {
    return (
        // <div className="position-raltive top-0 start-0 translate-middle-x">
        <div>
            <h4 className=" my-3">{todo.sno}.{todo.title}</h4>
            <p>{todo.desc}</p>
            <button onClick= {()=>{onDelete(todo)}} className="btn btn-sm btn-danger">Delete</button>
        </div>
    )
}
