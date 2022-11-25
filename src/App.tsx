import styles from "./App.module.css";
import "./global.css";

import { Header } from "./Components/Header";
import { TaskBar } from "./Components/TaskBar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <TaskBar 
            content= "teste"
            isDone={false}
          />
        </main>
      </div>
    </>
  );
}

export default App;
