import React, { useState } from 'react'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

export const AddTodo = (props) => {

    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if (!Title||!Desc) {
            alert("error");
        }
        props.addTodo(Title,Desc);
        setTitle("");
        setDesc("");
        // Desc="";
    }
    return (
        <div className="container">
            <h3 className='my-3'>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Title:</label>
                    <input value={Title} onChange={(e)=>{setTitle(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Description:</label>
                        <input value={Desc}  onChange={(e)=>{setDesc(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
                        <div className="mb-3 form-check">
  </div>
                            <button type="submit" className="btn btn-sm btn-success ">Submit</button>
</form>
                    </div>
                    )
}
