
import './FormTask.css';
import React, {useState} from "react";

function FormTask(props) {
    const [nameTask, setNameTask] = useState('Estudar React');
    const [completed, setCompleted] = useState(false);

    const clearForm = () => {
      setNameTask('')
      setCompleted(false)
    }
    
    const createTask = () => {
        props.setTask([...props.tasks, {name:nameTask, completed:completed}])
        clearForm()
    }

    const handleName = (event) => {
      setNameTask(event.target.value);

    }

    const handleCompleted = (event) => {
      setCompleted(!completed);
    }

  return (
    <div className="form">
        <h3 className='titleForm'>Criar nova Tarefa</h3>
        <div className='formInputs'>
          <label>Name:</label>
          <input className='textInput' onChange={handleName} value={nameTask}></input>
          <input type="checkbox" name="completed" onChange={handleCompleted}  checked={completed}/>Completed
          <button className='buttonForm' onClick={() => createTask()}>Criar</button>
        </div>
    </div>
  );
}

export default FormTask;
