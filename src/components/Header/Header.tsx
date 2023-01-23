import styles from './Header.module.css'
import todoLogo from '../../assets/todoLogo.svg'
import {AiOutlinePlusCircle} from 'react-icons/ai'
export function Header() {

    return <div>
        <header className={styles.header}>
            <img src={todoLogo} alt="" />

            <form className={styles.newTaskForm}>
                <input type="text"  placeholder='Adicione uma nova tarefa'/>
                <button>Criar  <AiOutlinePlusCircle size={20}/> </button>
            </form>
        </header>
    </div>
}