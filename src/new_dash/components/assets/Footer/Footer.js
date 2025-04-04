import styles from './Footer.module.css'

const Footer = ({data,hora,registros}) => {
    return (
        <>
            <footer className={`${styles.footer}`}>
                <div className={`${styles.estatisticas}`}>
                    <h3>
                        Ultima atualização: {data} ás {hora}
                    </h3>
                    <h4>
                        Registros encontrados: {registros}
                    </h4>
                </div>
            </footer>
        </>
    )
}

export default Footer 