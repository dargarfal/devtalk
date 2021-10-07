import styles from '../styles/Header.module.css'
import Link from "next/link"


export default function Header() {
  return (
    <div className={styles.main_header}>
        <h1 className={styles.title}>
          Welcome to DevTalk
        </h1>

        <nav>
          <div className={styles.main_menu}>
            <Link href="/timeline">Timeline</Link>
            <Link href="/">Home</Link> 
          </div>       
        </nav>
    </div>
  )
}
