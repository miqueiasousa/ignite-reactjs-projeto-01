import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
      <div className={styles.profile}>
        <strong>Miqueias Sousa</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}
