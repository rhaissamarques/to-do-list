import styles from "./TaskBar.module.css";
import { PlusCircle } from "phosphor-react";

export function TaskBar() {
  return (
    <>
      <form className={styles.taskForm} action="submit">
        <input className={styles.inputTask} type="text" placeholder="Adicione uma nova tarefa" id="" />
        <button type="submit" className={styles.inputButton} >Criar
          <PlusCircle size={20}/>
        </button>
      </form>
    </>
  )
}