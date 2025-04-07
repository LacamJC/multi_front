import Card from '../assets/Card'
import Analistas from '../listas/Analistas'
import Clientes from '../listas/Clientes'
import styles from './Body.module.css'
import SelectData from '../SelectData/SelectData.js'

import axios from "axios"
import { useState, useEffect } from 'react'
const Body = () => {
    const [data, setData] = useState()

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await axios.get('http://multisoluction.ddns.net:9944/metrica')
                const data = response.data
                setData(data)
                console.log(response)
            }
            catch(err){
                console.log(err.message)
            }
        }

        fetchData()
    },[])

    return(
        <>
        <div className={`${styles.body}`}>
            <SelectData/>
            <div className={`${styles.lineCard}`}>
                
                
                                {
                                    data ? (
                                        <>
                                            <Card
                                                titulo="Horas"
                                                descricao={data.total_horas_apontadas}
                                            />

                                            <Card 
                                                titulo="Faturamento"
                                                descricao={`R$: ${data.fatoramento.total.toFixed(2)}`}
                                            />

                                            <Card 
                                                titulo="Analistas"
                                                descricao={`R$: ${data.a_pagar_analistas.toFixed(2)}`}
                                                />
                                                
                
            
                
                                        </>
                                    ) : (<div className="alert alert-danger">Sem dados para analisar</div>)
                                }
                {/* <Card
                    titulo="Horas Apontadas"
                    descricao={data.total_horas_apontadas}    
                />
                <Card
                    titulo="Faturamento"
                    descricao="R$:30.000.00"    
                />
                <Card
                    titulo="Pagar analistas"
                    descricao="R$:30.000.00"    
                /> */}
            </div>

            <Analistas/>
            <div className={`${styles.ws}`}></div>
            <Clientes/>
        </div>
        </>
    )
}

export default Body 