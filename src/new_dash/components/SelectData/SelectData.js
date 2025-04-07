import { useState, useRef, useEffect } from 'react';
import styles from "./select.module.css"
import axios from 'axios'
function SelectData() {

    const meses = [
        { mes: "Janeiro", valor: 0 },
        { mes: "Fevereiro", valor: 1 },
        { mes: "Março", valor: 2 },
        { mes: "Abril", valor: 3 },
        { mes: "Maio", valor: 4 },
        { mes: "Junho", valor: 5 },
        { mes: "Julho", valor: 6 },
        { mes: "Agosto", valor: 7 },
        { mes: "Setembro", valor: 8 },
        { mes: "Outubro", valor: 9 },
        { mes: "Novembro", valor: 10 },
        { mes: "Dezembro", valor: 11 }
    ];

    const mesCorrente = new Date().getMonth()


    

    async function select(event) {
        console.log("NOVO MES SELECIONADO")
        const select = event.target.value 

        try{
            const response = await axios.get('http://localhost:3002/mes/'+select)
            const data = response.data 

            console.log(data)
        }
        catch(err){
            console.log(err.message)
        }
    }

    return (
        <>
            <div className={`${styles.content}`}>
                <select className="form-select" aria-label="Default select example" onChange={select}>

                    <option selected>Selecione o mes</option>
                    {meses.map((mes, index) => {
                        return (
                            <option key={index} value={mes.valor}  >{mes.mes}</option>
                        )
                    })}
                </select>

            </div>
        </>
    )
}

export default SelectData;