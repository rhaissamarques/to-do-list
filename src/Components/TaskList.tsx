import styles from "./TaskList.module.css";
import { Backpack } from "phosphor-react";

export function TaskList() {
  return (
    <>
      <div className={styles.content} >
        <div className={styles.tasksHead}>
          <div className={styles.tasksCreated}>Tarefas criadas 0</div>
          <div className={styles.tasksDone}>Concluídas 0</div>
        </div>
        <div className={styles.line} />
        <div className={styles.empty}>
          <Backpack size={50} className={styles.icon} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </>
  );
}
