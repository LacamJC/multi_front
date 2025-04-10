import DataContext from "./contexts/DataContext"
import Index from "./new_dash/components/Index/Index"
import Header from "./new_dash/components/nav/Header"

import axios from "axios"
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Toaster } from "react-hot-toast"

const App = () => {
  const [data, setData] = useState({
    loading: true,
    messages: [] // Inicialize um array para armazenar as mensagens
  });

  var timeLoad = 0

  setInterval(() => {
    if(data.loading == true){
      timeLoad++;

      if(timeLoad >= 10)
      {
        alert('A requisição está demorando, verifique se o servidor da api está ligado, ou contate o suporte')
        timeLoad = 0
      }else{
        timeLoad = 0
      }
    }

  }
  , 1000);

  useEffect(() => {
    const mesRecorrente = async () => {
      await axios.get('http://multisoluction.ddns.net:9944/mes/15')

    }
    mesRecorrente()


    const fetchData = async () => {

      try {
        // await axios.get('http://multisoluction.ddns.net:9944/mes/3')
        console.log("Puxando dados principais")

        //
        const [sqlResponse, metricaResponse, analistaResponse, clienteResponse] = await Promise.all([
          axios.get('http://multisoluction.ddns.net:9944/sql'),
          axios.get('http://multisoluction.ddns.net:9944/metrica'),
          axios.get('http://multisoluction.ddns.net:9944/analistas'),
          axios.get('http://multisoluction.ddns.net:9944/clientes')
        ]);

        setData({
          loading: false,
          messages: [
            { sql: sqlResponse.data },
            { metrica: metricaResponse.data },
            { analista: analistaResponse.data },
            { cliente: clienteResponse.data }
          ]
        });
        //

      } catch (err) {
        console.error("Error fetching data:", err);
        setData({
          loading: false,
          error: err.message // Adicione um estado de erro para lidar com falhas
        });
      }
    };

    setTimeout(() => {

      fetchData();
    }, 1000)
  }, []);

  // console.log(data

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Header />
      <Index />
      {/* <button onClick={()=>{console.log(data)}}>Click</button> */}
      <Toaster
        position="left-bottom"
      />
    </DataContext.Provider>
  )
}

export default App