import './task.css';

function Task(props) {
    return (
      <div className="taskContainer">
            <h3>{props.task.name}</h3>
            <p>Tarefa concluída? {props.task.completed ? 'Sim' : 'Não'}</p>
      </div>
    );
  }
  
  export default Task;
  