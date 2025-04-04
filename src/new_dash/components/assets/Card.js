import styles from './Card.module.css'

const Card = ({titulo, descricao}) => {
    return(
        <>
            <div className={`${styles.card}`}>
                <h3 className={`${styles.titulo}`}>{titulo}</h3>
                <h4 className={`${styles.descricao}`}>{descricao}</h4>
            </div>
        </>
    )
}

Card.defaultProps = {
    titulo: "Titulo",
    descricao: "Descricao",
  
}

export default Card 