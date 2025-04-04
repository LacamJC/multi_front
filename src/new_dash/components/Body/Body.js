import Card from '../assets/Card'
import Analistas from '../listas/Analistas'
import Clientes from '../listas/Clientes'
import styles from './Body.module.css'

const Body = () => {
    return(
        <>
        <div className={`${styles.body}`}>
            <div className={`${styles.lineCard}`}>
                <Card
                    titulo="Horas Apontadas"
                    descricao="30:00"    
                />
                <Card
                    titulo="Faturamento"
                    descricao="R$:30.000.00"    
                />
                <Card
                    titulo="Pagar analistas"
                    descricao="R$:30.000.00"    
                />
            </div>

            <Analistas/>
            <div className={`${styles.ws}`}></div>
            <Clientes/>
        </div>
        </>
    )
}

export default Body 