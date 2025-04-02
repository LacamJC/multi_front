import styles from "./Card.module.css"

const Card = ({ titulo, identificador, valor, descricao }) => {
    return (<>
        <div className={`${styles.card}`}>
            <h3>{titulo}  <span>{identificador}</span></h3>
            <p>{valor}</p>

            <p className={`${styles.descricao}`}>{descricao}</p>
        </div>
    </>)
}

Card.defaultProps = {
    titulo: "Teste",
    identificador: "123",
    valor: 200,
    descricao: "Teste"
}

export default Card