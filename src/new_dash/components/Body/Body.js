import Card from '../Card/Card.js'
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

    const formatarParaReal = (valor) => {
        return valor.toLocaleString('pt-BR', {
            styles: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    }

    return(
        <>
        <div className={`${styles.body}`}>
            {/* <SelectData/> */}
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
                                                descricao={`R$: ${formatarParaReal(data.fatoramento.total)}`}
                                            />

                                            <Card 
                                                titulo="Analistas"
                                                descricao={`R$: ${formatarParaReal(data.a_pagar_analistas)}`}
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