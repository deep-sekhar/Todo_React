
import './mycomp/style.css';
import Header from "./mycomp/Header.js";
import {Todos} from "./mycomp/todos.js";
import {Footer} from "./mycomp/footer.js";
import { AddTodo } from "./mycomp/AddTodo";
import { About } from "./mycomp/About";

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let inittodo;
  // let sno;
  if (localStorage.getItem("todos")===null) {
    inittodo = [];
    // sno=0;
  }
  else
  {
    inittodo= JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log("delete of",todo,"jiii");

    // wont work 
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    settodos(todos.filter((e)=>{
    return e!==todo;
    }));
    // sno--;
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo= (Title,Desc)=>{
    console.log("adding");
    let sno;
    // let sno = todos.length+1;
    if (todos.length===0) {
      sno=1;
    }
    else
    {
      sno = todos[todos.length-1].sno+1;
    }
    // sno++;
    const mytodo = {
      sno:sno,
      title:Title,
      desc:Desc
    }
    settodos([...todos,mytodo]);
  }

  const [todos, settodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header title="Todo list app" searchbar={true}/>

      <Switch>
          <Route exact path="/" render={
            ()=>{
              return(
                <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete} />
                </>
              ) 
            }
          }>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
