import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header';
import Metricas from './components/metricas/Metricas';
import Analistas from './components/metricas/Analistas';
import ViewAnalista from './components/analistas/ViewAnalista.js'
import Clientes from './components/clientes/Clientes.js';
import axios from "axios"
import styles from "./assets/scss/home.module.css"
import { useEffect, useState } from 'react';
import Index from './new_dash/Index.js';
import Footer from './new_dash/components/assets/Footer/Footer.js';
function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  useEffect(()=>{
      const sqlAtt = async () =>{
        try{
          console.log("ENVIANDO REQUISICAO")
          const response = await axios.get("http://multisoluction.ddns.net:9944/sql")

          console.log(response)
          const data = response.data
          console.log(`SQL DATA ${data}`)
          console.log(data)
          if(data.loading == false){
            console.log("Dados atualizados com sucesso")
            setData(data)
            setTimeout(()=>{
              setLoading(data.loading)
            
            }, 2000)
            
          }
        }catch(error){
          console.log(error.message)
        }
      }
      // console.log("OASDOKAKODOKASDOKAKODKO")
      sqlAtt()
      console.log('Requisição enviada')
  },[])

  return (
    <>
    
      <Header />
    {
      loading ? (
        <div className={`${styles.background}`}>
          <div class="spinner-border text-info" role="status">
        <span class="sr-only"></span>
        </div>
        </div>
  )
      :
      (
        <>
        <Index/>
        <Footer 
          data={data.data}
          hora={data.hora}
          registros={data.registros}
        />

        </>
      )
    }
        
      </>
  );
}

export default App;
