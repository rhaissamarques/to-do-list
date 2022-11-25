import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <>
      <div className={styles.content} >
        <div className={styles.tasksHead}>
          <div className={styles.tasksCreated}>Tarefas criadas 0</div>
          <div className={styles.tasksDone}>Concluídas 0</div>
        </div>
        <div className={styles.line} />
      </div>
    </>
  );
}
