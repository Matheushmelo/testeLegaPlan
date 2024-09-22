'use client'

import ModalButton from "../common/button/button";
import Tasks from "../common/tasks/tasks";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function Todos() {
  const [activeTasks, setActiveTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const addTask = (taskTitle: string) => {
    setActiveTasks((prevTasks) => [...prevTasks, taskTitle]);
  };

  const completeTask = (taskTitle: string) => {
    setActiveTasks((prevTasks) => prevTasks.filter((task) => task !== taskTitle));
    setCompletedTasks((prevCompleted) => [...prevCompleted, taskTitle]);
  };

  const uncompleteTask = (taskTitle: string) => {
    setCompletedTasks((prevCompleted) => prevCompleted.filter((task) => task !== taskTitle));
    setActiveTasks((prevTasks) => [...prevTasks, taskTitle]);
  };

  const deleteTask = (taskTitle: string, isCompleted: boolean) => {
    if (isCompleted) {
      setCompletedTasks((prevCompleted) => prevCompleted.filter((task) => task !== taskTitle));
    } else {
      setActiveTasks((prevTasks) => prevTasks.filter((task) => task !== taskTitle));
    }
  };

  const noTasks = activeTasks.length === 0 && completedTasks.length === 0;

  return (
    <div className={styles.tasks}>
      {noTasks ? (
        <div className={styles.noTodosContainer}>
          <p className={styles.noTodosMessage}>Você ainda não adicionou nenhuma tarefa!</p>
        </div>
      ) : (
        <>
          <p className={styles.noCompleteTasks}>Suas tarefas de hoje</p>
          <div>
            {activeTasks.map((task, index) => (
              <Tasks
                key={index}
                label={task}
                onComplete={() => completeTask(task)}
                onDelete={() => deleteTask(task, false)}
                isCompleted={false} // A tarefa não está concluída
              />
            ))}
          </div>

          <p className={styles.completeTasks}>Tarefas finalizadas</p>
          <div>
            {completedTasks.map((task, index) => (
              <Tasks
                key={index}
                label={task}
                onComplete={() => uncompleteTask(task)}
                onDelete={() => deleteTask(task, true)}
                isCompleted={true} // A tarefa está concluída
              />
            ))}
          </div>
        </>
      )}
      <ModalButton addTask={addTask} />
    </div>
  );
}