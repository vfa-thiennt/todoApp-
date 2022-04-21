import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    key: number , 
    task : ITask,
    deleteTask(tasknametoDel : string) : void
}

const TodoItem = ({task , deleteTask , key} : Props) => {
  return (
    <div>
        <div className="item">
        <p>{task.taskName} | {task.deadLine}</p>
        <button onClick={() => deleteTask(task.taskName)}>X</button>
        </div>
    </div>
  )
}

export default TodoItem