import Task from "../Task/Task";
import React, {useState} from "react";
import './App.css';
import FormTask from "../FormTask/FormTask";

function App() {
  const [tasks, setTask] = useState([{name:'Estudar React', completed: true},
                                    {name:'Levar cachorro pra passear', completed: false}]);
  
  const renderTasks = () =>{
    return tasks.map(t => {
      return <Task task={t}/>
    })
  }
  return (
    <div className="container">
      <h1 className="title">TO-DO</h1>
      <div>
        {renderTasks()}
      </div>

      <FormTask tasks={tasks} setTask={setTask}/>
    </div>
  );
}

export default App;
