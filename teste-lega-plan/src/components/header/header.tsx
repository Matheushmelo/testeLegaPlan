import styles from "./styles.module.scss";

export default function HeaderHome() {
  return (
		<div className={styles.header}>
			<div className={styles.headerContainer}>
				<img className={styles.logoHeader} src="\logo.png" alt="logoHeader"/>
      	<p className={styles.welcomeHeader}>Bem-vindo de volta, Matheus</p>
      	<p className={styles.dateHeader}>Sexta, 20 de setembro de 2024</p>
			</div>
		</div>
  )
}


