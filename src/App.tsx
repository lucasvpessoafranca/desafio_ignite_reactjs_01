import {useState, useEffect}  from 'react'
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Tasks";
const LOCAL_STORAGE_KEY = "todo:savedTasks";
export interface ITask {
  id:string;
  title:string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
   
  ])


  useEffect(()=> {
    loadSavedTasks()
  },[])
  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }
  function setTasksAndSave(newTasks: ITask[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))

  }

  function addTask(taskTitle:string) {
    setTasksAndSave([
      ...tasks,{
        id:crypto.randomUUID(),
        title:taskTitle,
        isCompleted:false
      }
    ])
  }
  
  function deleteTaskById(taskId:string) {
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasksAndSave(newTask)
  }

  function toggleTaskCompletedById(taskId:string) {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) {
          return {
            ...task,
            isCompleted:!task.isCompleted
          }
      } else {
        return task;
      }
    })
    setTasksAndSave(newTasks)
  }
  return <div>
    <Header onAddTask={addTask}/>
    <Tasks onComplete={toggleTaskCompletedById} tasks={tasks} onDelete={deleteTaskById}/>
  </div>
}