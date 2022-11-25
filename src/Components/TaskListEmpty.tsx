import styles from "./TaskList.module.css";
import { Backpack } from "phosphor-react";

export function TaskListEmpty() {
  return (
    <div className={styles.empty}>
      <Backpack size={50} className={styles.icon} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
