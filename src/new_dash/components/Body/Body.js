
import { useContext } from 'react'
import LineCard from '../LineCard/LineCard'
import Analistas from '../listas/Analistas'
import Clientes from '../listas/Clientes'
import SelectData from '../SelectData/SelectData'
import styles from './Body.module.css'
import DataContext from '../../../contexts/DataContext'
const Body = () => {

    const { data, setData } = useContext(DataContext)

    console.log(`
            Data body: ${data.loading} 
        `)


    return (
        <>
            <div className={`${styles.body}`}>
                <SelectData />
                {
                    data.loading ? (
                        <div className={`${styles.loader_background}`}>
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                        :
                        (
                            <>
                                <div className={`${styles.lineCard}`}>
                                    <LineCard />
                                </div>
                                <Analistas />
                                <Clientes />
                            </>
                        )
                }

            </div>
        </>
    )
}

export default Body 