import styles from "./ListItems.module.css";
import { Trash } from "phosphor-react";

export interface ListItemsProps {
  id?: string;
  content: string;
  isDone: boolean;
  onDeleteTask: (content: string) => void
}

export function ListItems({ id, content, isDone, onDeleteTask }: ListItemsProps) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.radioItem}>
            <input type="radio" className={styles.isDone} />
            <span className={styles.listContent}>{content}</span>
          </div>
          <button onClick={handleDeleteTask} title="Deletar tarefa">
            <Trash size={24} />
          </button>
        </div>
      </main>
    </>
  );
}
