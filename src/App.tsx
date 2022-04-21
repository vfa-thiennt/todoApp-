import React , { FC , useState , ChangeEvent} from 'react';
import {ITask} from './Interfaces';
import TodoItem from './TodoItem/TodoItem';
import CoordinateElement from './CoordinateElement/CoordinateElement';
import './App.css';

const App : FC = () => {
  const [task , setTask ] = useState<string>('');
  const [day , setDay ] = useState<number>(0);
  const [todoList , setTodoList ] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if(e.target.name === 'task') {
      setTask(e.target.value);
    }
    if(e.target.name === 'day'){
      setDay(Number (e.target.value))  
    }
    
  }

  const addTask = () => {
    const newTask = {taskName : task , deadLine : day}
    setTodoList([...todoList , newTask])
    setTask("")
    setDay(0)
    console.log(todoList)
  }

  const deleteTask = (tasknametoDel: string):void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== tasknametoDel
    }))
  }
  return (
    <div className="App">
      <h2>ToDo List</h2>
      <div className="todoContainer">
        <div className="todo-content">
          <input value={task} type="text" placeholder='Task here ...' name='task' onChange={handleChange}/>
          <input value={day} type="number" placeholder='Deadline' name='day' onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      <div>
        {
          todoList.map((task: ITask , key: number) => {
            return <TodoItem key={key} task={task} deleteTask={deleteTask} />
          })
        }
      </div>

        <CoordinateElement />
        
    </div>
  );
}

export default App;
