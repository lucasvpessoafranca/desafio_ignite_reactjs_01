import styles from './Task.module.css'
import {TbTrash} from 'react-icons/tb'

export function Task() {

    return (
        <div className={styles.task}>
            <button className={styles.checkContainer}>
                <div></div>
            </button>
            <p>Texto direcionado para a tela de task</p>
            <button className={styles.deleteButton}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}