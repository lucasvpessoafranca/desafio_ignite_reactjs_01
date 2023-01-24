import {useState}  from 'react'
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";

export interface ITask {
  id:string;
  title:string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: '1',
      title:'teste',
      isCompleted:true
    },
    {
      id: '2',
      title:'teste 2',
      isCompleted:false
    }
  ])
  
  function addTask(taskTitle:string) {
    setTasks([
      ...tasks,
       {
        id:crypto.randomUUID(),
        title:taskTitle,
        isCompleted:false
      }
    ])
  }
  return <div>
    <Header onAddTask={addTask}/>
    <Tasks tasks={tasks}/>
  </div>
}