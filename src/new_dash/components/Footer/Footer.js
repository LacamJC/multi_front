import { useContext, useEffect, useState } from 'react'
import styles from './Footer.module.css'
import DataContext from '../../../contexts/DataContext'
// import DataContext from '../../../contexts/DataContext'

const Footer = () => {
    const { data } = useContext(DataContext)
    const [info, setInfo] = useState({})
    const infoData = data.messages && data.messages.find(item => item.metrica);
    console.log(data.loading)
    const date = new Date()
    const year = date.getFullYear(); // 4-digit year
    const month = date.getMonth() + 1; // Months are 0-indexed
    const day = date.getDate(); // Day of month
    const formattedTime = new Intl.DateTimeFormat('en', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(new Date()).replace(':', ':');
    const formattedDate = `${year}/${month}/${day}`;

    if (infoData && data.loading == false) {
        console.log()
        return (
            <>
                <footer className={`${styles.footer}`}>
                    <div className={`${styles.estatisticas}`}>
                        <h3>
                            Ultima atualização: <span className={`${styles.prop}`}>
                                {formattedDate}
                            </span> ás <span className={`${styles.prop}`}>
                                {formattedTime}
                            </span>
                        </h3>
                        <h4>
                            Registros encontrados: <span className={`${styles.prop}`}>
                                {infoData.metrica.registros}
                            </span>
                        </h4>
                    </div>
                </footer>
            </>
        )
    }




}

export default Footer 