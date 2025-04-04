import Card from '../assets/Card'
import Analistas from '../listas/Analistas'
import styles from './Body.module.css'

const Body = () => {
    return(
        <>
        <div className={`${styles.body}`}>
            <div className={`${styles.lineCard}`}>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <Analistas/>
        </div>
        </>
    )
}

export default Body 