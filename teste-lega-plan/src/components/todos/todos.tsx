import ModalButton from "../common/button/button";
import Tasks from "../common/tasks/tasks";
import styles from "./styles.module.scss";

export default function Todos() {
  const isMounted = true
  if(isMounted === false) {
    return (
      <div className={styles.todos}>
        <div className={styles.noTodos}>
					<p>Você ainda não adicionou nenhum lembrete.</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.tasks}>
        <p className={styles.noCompleteTasks}>Suas tarefas de hoje</p>
        <div>
          <Tasks label="Lavar as mãos"/>
          <Tasks label="Fazer um bolo"/>
          <Tasks label="Lavar a louça"/>
        </div>
        <p className={styles.completeTasks}>Tarefas finalizadas</p>
        <div>
          <Tasks label="Levar o lixo para fora"/>
        </div>
        <ModalButton/>
      </div>
    )
  } 
}