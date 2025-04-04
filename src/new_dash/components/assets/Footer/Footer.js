import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={`${styles.footer}`}>
                <div className={`${styles.estatisticas}`}>
                    <h3>
                        Ultima atualização: 04/04/2025 ás 11:00
                    </h3>
                    <h4>
                        Registros encontrados: 4
                    </h4>
                </div>
            </footer>
        </>
    )
}

export default Footer 