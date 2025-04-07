import { useContext } from 'react'
import styles from './Footer.module.css'
// import DataContext from '../../../contexts/DataContext'

const Footer = ({data,hora,registros}) => {

    return (
        <>
            <footer className={`${styles.footer}`}>
                <div className={`${styles.estatisticas}`}>
                    <h3>
                        Ultima atualização: <span className={`${styles.prop}`}>{data}</span> ás <span className={`${styles.prop}`}>{hora}</span>
                    </h3>
                    <h4>
                        Registros encontrados: <span className={`${styles.prop}`}>{registros}</span>
                    </h4>
                </div>
            </footer>
        </>
    )
}

export default Footer 