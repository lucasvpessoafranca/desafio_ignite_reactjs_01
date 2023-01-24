import styles from './Header.module.css'
import todoLogo from '../../assets/todoLogo.svg'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (tasksTitle:string) => void;
}
export function Header({onAddTask}: Props) {

    const [title, setTitle] = useState("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        onAddTask(title)
        setTitle("")
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return <div>
        <header className={styles.header}>
            <img src={todoLogo} alt="" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input type="text"  placeholder='Adicione uma nova tarefa' value={title} onChange={onChangeTitle}/>
                <button>Criar  <AiOutlinePlusCircle size={20}/> </button>
            </form>
        </header>
    </div>
}