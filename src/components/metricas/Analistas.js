import styles from "../../assets/scss/analistas.module.css"

const Analistas = ({nome, valor}) => {
    return (
        <>
                <div className={`${styles.card}`}>
                    <h3 className={`${styles.analista}`}>{nome}</h3>
                    <h4 className={`${styles.apagar}`}>A pagar:  <span className={`${styles.valor_pagar}`}>R${valor}</span></h4>
                </div>
            
        </>
    )
}

export default Analistas