import styles from './Home.module.scss'
import Landing from '../../components/Landing/Landing'
function Home() {
  return (
    <section className={styles.landing_section}>  
      <Landing/>
    </section>
  )
}

export default Home