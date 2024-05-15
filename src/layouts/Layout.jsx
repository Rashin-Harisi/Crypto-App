/* eslint-disable react/prop-types */
import styles from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div>
        <header className={styles.header}>
            <p>Crypto App</p>
        </header>
        <div className={styles.children}>{children}</div>
        <footer className={styles.footer}>
            <p>Written by <a href="https://github.com/Rashin-Harisi">Rashin Harisi</a></p>
        </footer>
    </div>
  )
}

export default Layout