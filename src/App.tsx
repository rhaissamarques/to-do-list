import styles from "./App.module.css";
import "./global.css";

import { Header } from "./Components/Header";
import { TaskBar } from "./Components/TaskBar";
import { TaskList } from "./Components/TaskList";
import { ListItems, ListItemsProps } from "./Components/ListItems";

// const items: ListItemsProps[] = [
//   {
//     id: "1",
//     content: "primeiro item da lista",
//     isDone: false,
//   },
//   {
//     id: "2",
//     content: "segundo item da lista",
//     isDone: true,
//   },
//   {
//     id: "3",
//     content: "terceiro item da lista",
//     isDone: false,
//   },
// ];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <TaskBar />
          {/* <TaskList /> */}
          {/* {items.map((item) => {
            return (
              <ListItems
                key={item.id}
                content={item.content}
                isDone={item.isDone}
              />
            );
          })} */}
        </main>
      </div>
    </>
  );
}

export default App;
