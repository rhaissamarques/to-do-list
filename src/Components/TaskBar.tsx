import styles from "./TaskBar.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { ListItems } from "./ListItems";
import { TaskList } from "./TaskList";
import { TaskListEmpty } from "./TaskListEmpty";

export interface TaskBarProps {
  content: string;
  isDone: boolean;
}

export function TaskBar({ content, isDone }: TaskBarProps) {
  const [task, setTask] = useState(['Criando uma tarefa']);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTask([...task, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");

    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Campo obrigatório");
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = task.filter((task) => {
      return task !== taskToDelete;
    })
    setTask(tasksWithoutDeletedOne);
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <textarea
          className={styles.inputTask}
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit" className={styles.inputButton}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      {ListItems.length ? <TaskList /> : <TaskListEmpty />}
      
      {task.map((item) => {
        return (
          <ListItems
            content={item}
            isDone={isDone}
            onDeleteTask={deleteTask}
          />
        )
      })}
    </>
  );
}
