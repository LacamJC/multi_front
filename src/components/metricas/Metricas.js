import Card from "../card/Card"
import styles from "../../assets/Main.css"
import { useState, useEffect } from "react"
import axios from "axios"
const Metricas = () => {
    const [data, setData] = useState()

    useEffect(() => {

        const fetchData = async () => {
            console.log("Teste")
            try {
                const response = await axios.get("http://localhost:3002/metrica", {
                    headers: {
                        token: "a92mf83n2mfkb83nHj"
                    }
                })
                const data = response.data

                if (response.status == 401) {
                    alert("Teste")
                }

                setData(data)
                console.log('DATA SETADA')
                console.log(data)
            } catch (error) {
                console.log(error.message)
                if (error.status == 401) {
                    alert("Acesso não autorizado a api, verifique suas credenciais")
                }

                if (error.status == 429) {
                    alert("Limite de requisições excedidos, aguarde antes de iniciar novas requisições")
                }
            }
        }

        fetchData()


        console.log("DATA FETCH")
        console.log(data)
    }, [])

    return (
        <>
            <div className={`d-flex justify-content-evenly align-items-center flex-wrap `}>

                {
                    data ? (
                        <>
                            <Card
                                titulo="TOTAL DE HORAS APONTADAS"
                                identificador=""
                                valor={`${data.total_horas_apontadas}`}
                                descricao=""
                            />


                            <Card
                                titulo="FATURAMENTO TOTAL"
                                identificador=""
                                valor={`R$: ${data.fatoramento.total.toFixed(2)}`}
                                descricao=""
                            />

                            <Card
                                titulo="A PAGAR PARA ANALISTAS"
                                identificador=""
                                valor={`R$: ${data.a_pagar_analistas}`}
                                descricao=""
                            />
 

                        </>
                    ) : (<div className="alert alert-danger">Acesso não autorizado</div>)
                }
            </div>
        </>
    )
}



export default Metricas