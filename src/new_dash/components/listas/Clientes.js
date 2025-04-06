import Lista from "./Lista"
import ListaItem from "./ListaItem";

import { useState, useEffect } from "react"
import axios from "axios"
const Clientes = () => {


  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://multisoluction.ddns.net:9944/clientes')
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
      cliente: "Secor",
      valor: 100000
    },
    {
      cliente: "Empresa Alfa",
      valor: 150000
    },
    {
      cliente: "João da Silva",
      valor: 50000
    },
    {
      cliente: "Maria Souza",
      valor: 200000
    },
    {
      cliente: "Supermercado Bom Preço",
      valor: 80000
    },
    {
      cliente: "Construtora União",
      valor: 300000
    },
    {
      cliente: "Escola Aprender Mais",
      valor: 60000
    },
    {
      cliente: "Oficina do Zé",
      valor: 25000
    },
    {
      cliente: "Loja Bela Casa",
      valor: 120000
    },
    {
      cliente: "Transportes Rápidos",
      valor: 90000
    }
  ];

  return (
    <>
      <h1>Valor a receber por Cliente</h1>
      <ul className="list-group">
        {data ?
          data.map((item, index) => {
            return (
              <ListaItem alt={item.cliente} name={item.cliente} prop={`R$: ${formatarParaReal(item.a_faturar)}`} key={index} />
            )
          })
          : (<h1>Sem registros de analistas para analisar</h1>)}

      </ul>
    </>
  )
}

export default Clientes