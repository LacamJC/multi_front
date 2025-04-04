import Analistas from '../metricas/Analistas'

import { useState, useEffect} from "react"
import axios from "axios"

const ViewAnalista = () => {
    const [data, setData] = useState([])
    var limitador = 0;
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get("http://192.168.15.2:3002/analistas", {
                    headers: {
                        token: "a92mf83n2mfkb83nHj"
                    }
                })
                const data = response.data
                setData(data)
                // console.log(data)    
            }catch(err){
                console.log(err.message)
                alert(err.message)
            }
        }
        if(limitador == 0)
        {

            fetchData()
            limitador++
        }
    },[])


    return (
        <>
        <h1 className={`text-center my-5`}>Analistas</h1>
            <div className={`d-flex justify-content-start container align-items-center flex-wrap `}>
             
                {data ? 
                    data.map((registro)=>(
                        <>
                            <Analistas
                                nome={registro.nome}
                                valor={registro.a_pagar}
                            />
                        </>
                        
                    ))
                 : (<h1>Sem registros apra analisar</h1>)}
            </div>
        </>
    )
}

export default ViewAnalista