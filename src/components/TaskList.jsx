import React, { useEffect, useState } from 'react';
import useList from '../hooks/useList';



const TaskList = () => {
    const tasks = useList([]);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        tasks.push(newTask);
        setNewTask('');
    };

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };
    const clearData = () => {
      tasks.clear();
    };
    
    const ordenar = (event) => {
      tasks.order(event);
    };
    const desorden = (event) => {
        tasks.disorder(event);
    };
    return (
      <div>
        <h1> 
          Task List
        </h1>
        <form onSubmit={handleSubmit}>
          <input value={newTask} onChange={handleInputChange} placeholder="New Task" type="text" />
          <button type="submit">Create Task</button>
          <button type="button" onClick={clearData}>Clear</button>
          <button type="button" onClick={ordenar}>Ordenar</button>
          <button type="button" onClick={desorden}>Disorden</button>
          
        </form>
        
        
        
        { tasks.isEmpty() 
            ? (<p>Task List is Empty</p>)
            : (
              <ul>
                {tasks.value.map((task, index) => (
                  <li key={index}>
                    <input 
                      type="checkbox" 
                      onClick={() => tasks.remove(index)}
                      defaultChecked={false}
                    />
                    { 
                      task
                    };
                  </li>
                        ))}
              </ul>
            )}
      </div>
    );
};
 
export default TaskList;
