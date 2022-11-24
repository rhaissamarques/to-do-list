import styles from './App.css';
import "./global.css";

import { Header } from "./Components/Header";
import { TaskBar } from './Components/TaskBar';
import { TaskList } from './Components/TaskList';

function App() {

  return (
    <>
    <Header />
    <TaskBar />
    <TaskList />
    </>
  )
}

export default App
