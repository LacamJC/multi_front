import { useState, useEffect } from "react"
import axios from "axios"

import Analistas from "../metricas/Analistas"
const Clientes = () => {

    const [data, setData] = useState()
    var limitador = 0


    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get("http://192.168.15.2:3002/clientes", {
                    headers: {
                        token: "a92mf83n2mfkb83nHj"
                    }
                })
                const data = response.data
                setData(data)
                console.log(data)    
            }catch(err){
                console.log(err.message)
                alert(err.message)
            }
        } 

        fetchData()
    },[])


    return(
        <>
            <h1 className={`text-center my-5`}>Clientes</h1>
            <div className={`d-flex justify-content-start container align-items-center flex-wrap `}>
            {
                data ? data.map((registro)=>(

                    <Analistas
                        nome={registro.cliente}
                        valor={registro.a_faturar}
                    />
                )) : <><h1>SDASPODPOKADSOP</h1></>
                
            }  
            </div>
        </>
    )
}


export default Clientes