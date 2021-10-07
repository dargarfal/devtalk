import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppLayout from '../components/AppLayout'

export default function Home() {
  return (
    <div className={styles.container}>
    
      <AppLayout title="Home | Devter">
        <h1>Home</h1>
      </AppLayout>

      
    </div>
  )
}
