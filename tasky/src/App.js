import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", deadline: "Today" }
    ]
  });
  // return (
  //   <div className="container">
  //     <h1>Tasky</h1>
  //     <Task title="Dishes" deadline="Today" description="Empty dishwasher">
      
  //     </Task>
  //     <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away">
        
  //       </Task>
  //     <Task title="Tidy" deadline="Today"/>
  //   </div>
  // );
  return (
    <div className="container">
      <h1>Tasky</h1>
      {/* <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} description={taskState.tasks[0].description} />
      <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} description={taskState.tasks[1].description} />
      <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} description={taskState.tasks[2].description} /> */}
    {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
    />
  ))} 
    </div>
  );
}

export default App;
