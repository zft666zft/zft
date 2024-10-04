import React from 'react';


const Task = (props) =>{

    const getPriorityClass = () => {
        switch (props.priority) {
          case 'Low':
            return 'low-priority';
          case 'Medium':
            return 'medium-priority';
          case 'High':
            return 'high-priority';
          default:
            return '';
        }
      };

    return(
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className='title'> {props.title} </p>
        <p> Due: {props.deadline} </p>
        <p className='description'> {props.description} </p>
        <p className={getPriorityClass()}>{props.priority}</p>
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;