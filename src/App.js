    import React, {useState} from 'react';
    import Header from './components/Header';
    import './App.css';
    import TaskList from './components/TaskList';
    import AddTaskForm from './components/AddTaskForm';

        function App() {
          // state 1
        const [tasks, setTasks] = useState([
          {id:"task 1", title:"Learn JS fundamental", status: 0},
          {id:"task 2", title:"Code a Todo List level 2", status: 0},
          {id:"task 3", title:"Learn ReactJS", status: 0},
        ]);

        //  state 2
        const [showIncomplete, setShowIncomplete] = useState(true); //show

        // state 3

        const [newTask, setNewTask] = useState("");
        // add item
        const handleSubmit =(e)=> {
          e.preventDefault();
          if(newTask) {
            const task ={
              id: Date.now(),
              title: newTask,
              status: 0,
            }
            setTasks([...tasks, task])
            setNewTask("");
          }
        };
        // onchange
        const handleInputChange = (e)=>{
          setNewTask(e.target.value)
        };
        //
        const setTaskStatus = (taskId, status) =>{
          setTasks(tasks.map(task => {
            if(task.id === taskId) {
              return {...task, status: status ? 1: 0}
            }
            return task;
          }))
        }

        //
        const removeTask =(taskId)=>{
          setTasks(tasks.filter((task)=> task.id !== taskId));
        };
        //
          return (
            <div className="container">
              <Header title="Todo List" subTitle="Get things done"/>
              
              <TaskList 
              tasks={tasks} 
              showIncomplete={showIncomplete} 
              setTaskStatus={setTaskStatus} 
              removeTask={removeTask}
              setShowIncomplete={setShowIncomplete}
              />

            <AddTaskForm 
            newTask={newTask}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            />
          
          </div>
          )
          };
        export default App;
