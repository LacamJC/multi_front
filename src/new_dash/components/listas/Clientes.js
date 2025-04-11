import Lista from "./Lista"
import DataContext from "../../../contexts/DataContext";
import { useContext, useEffect, useState } from "react"
import ListaItem from "./ListaItem";

import axios from "axios"
const Clientes = () => {

  const formatarParaReal = (valor) => {
    return valor.toLocaleString('pt-BR', {
      styles: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => {
        setLoading(false) 
        
      }, 2000)
  }, [])

  const { data } = useContext(DataContext)
  const clientesData = data.messages && data.messages.find(item => item.cliente)

  if (clientesData && clientesData.cliente && clientesData.cliente.length > 0 ) {
    return (
      <>
        <h1 className="mx-2">Valor a receber por cliente</h1>
        <ul className="list-group">
          {
            clientesData.cliente.map((item, index) => (
              <ListaItem
                alt={item.cliente}
                name={item.cliente}
                prop={`R$: ${formatarParaReal(item.a_faturar)}`}
                key={index}
                hour={item.horas_apontadas}
              />
            ))
          }
        </ul>
      </>
    )
  } else {
    return (
      <p className="alert alert-warning">
        Sem informações sobre os clientes
      </p>
    )
  }

}

export default Clientes