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
function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  useEffect(()=>{
      const sqlAtt = async () =>{
        try{
          console.log("ENVIANDO REQUISICAO")
          const response = await axios.get("http://192.168.15.2:3002/sql")

          const data = response.data
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
      console.log("OASDOKAKODOKASDOKAKODKO")
      sqlAtt()
  },[])

  return (
    <>
      {/* <Header />

      {
        loading ? (
          <div className={`${styles.background}`} >
            
<div class="spinner-border text-primary" role="status">
              <span class="sr-only"></span>
          </div>
          </div>
          
        ) : (
          <>
        <Metricas />
      <ViewAnalista/>
      <Clientes/>  
      <h4 className='text-center'>Dados atualizados em {data.data} as {data.hora}</h4>
          </>

        
        )
      }
       */}

       <Index/>
      </>
  );
}

export default App;
