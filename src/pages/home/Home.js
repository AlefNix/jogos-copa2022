import logo from '../../assets/logo1.png'
import styles from './Home.module.css'

function Home() {

    return (
        <div className={styles.home_container}>
            <h2>Bem-vindo ao</h2><p className="copaaovivo"><h1>Copa ao Vivo 2022</h1></p>
            <img src={logo} alt='Qatar world cup logo' />
        </div>
    )
}

export default Home