import Lista from "./Lista"
import ListaItem from "./ListaItem";

import { useState, useEffect } from "react"
import axios from "axios"
const Analistas = () => {

  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://multisoluction.ddns.net:9944/analistas')
        const data = response.data
        setData(data)
        console.log(data)
      }
      catch (err) {
        console.log(err.message)
      }
    }

    fetchData()
  }, [])

  const formatarParaReal = (valor) => {
    return valor.toLocaleString('pt-BR', {
      styles: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  const clientes = [
    {
      cliente: "Felipe Darc",
      valor: 100000
    },
    {
      cliente: "Cleiton Henrique",
      valor: 150000
    },
    {
      cliente: "Tiago Fascina",
      valor: 50000
    }
  ];
  return (
    <>
      <h1>Valor a pagar por Analista</h1>
      <ul className="list-group">

        {data ?
          data.map((item, index) => {
            return (
              <ListaItem alt={item.nome} name={item.nome} prop={`R$: ${formatarParaReal(item.a_pagar)}`} key={index} />
            )
          })
          : (<h1>Sem registros de analistas para analisar</h1>)}

      </ul>
    </>
  )
}

export default Analistas