import styles from "./styles.module.scss";

export default function Todos() {
  const isMounted = false
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
      <><h1>Teste</h1></>
    )
  } 
}