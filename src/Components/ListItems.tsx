import styles from "./ListItems.module.css";
import { Trash } from "phosphor-react";

export interface ListItemsProps {
  id?: string;
  content: string;
  isDone: boolean;
}

function handleDeleteComment() {
  console.log("teste do botão");
}

export function ListItems({ id, content, isDone }: ListItemsProps) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.radioItem}>
            <input type="radio" className={styles.isDone} />
            <span className={styles.listContent}>{content}</span>
          </div>
          <button onClick={handleDeleteComment} title="Deletar tarefa">
            <Trash size={24} />
          </button>
        </div>
      </main>
    </>
  );
}
