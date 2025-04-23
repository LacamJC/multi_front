import { useState, useRef, useEffect, useContext } from 'react';
import styles from "./select.module.css"
import axios from 'axios'
import DataContext from '../../../contexts/DataContext';
import toast, { Toaster } from 'react-hot-toast';
import Alert from './Alert';

function SelectData() {

    const { data, setData } = useContext(DataContext)
    const notify = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg)
    const meses = [
        // { mes: "Janeiro - 2024", valor: 0 },
        // { mes: "Fevereiro - 2024", valor: 1 },
        // { mes: "Março - 2024", valor: 2 },
        // { mes: "Abril - 2024", valor: 3 },
        // { mes: "Maio - 2024", valor: 4 },
        // { mes: "Junho - 2024", valor: 5 },
        // { mes: "Julho - 2024", valor: 6 },
        // { mes: "Agosto - 2024", valor: 7 },
        { mes: "Setembro - 2024", valor: 8 },
        { mes: "Outubro - 2024", valor: 9 },
        { mes: "Novembro - 2024", valor: 10 },
        { mes: "Dezembro - 2024", valor: 11 },
        { mes: "Janeiro - 2025", valor: 12 },
        { mes: "Fevereiro - 2025", valor: 13 },
        { mes: "Março - 2025", valor: 14 },
        { mes: "Abril - 2025", valor: 15 },
        { mes: "Maio - 2025", valor: 16}
    ];

    // const gerarUltimosMeses = (quantidade) => {
    //     const mesesNomes = [
    //       "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    //       "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    //     ];
      
    //     const hoje = new Date();
    //     const meses = [];
      
    //     for (let i = 0; i < quantidade; i++) {
    //       const data = new Date(hoje.getFullYear(), hoje.getMonth() - i);
    //       const mes = mesesNomes[data.getMonth()];
    //       const ano = data.getFullYear();
    //       const valor = data.getMonth() + (12 * (ano - 2024)); // valor acumulado a partir de jan/2024
      
    //       meses.push({
    //         mes: `${mes} - ${ano}`,
    //         valor: valor
    //       });
    //     }
      
    //     return meses.reverse(); // do mais antigo para o mais recente
    //   };

    // const meses = gerarUltimosMeses(7)

    

    async function select(event) {
        console.log("NOVO MES SELECIONADO")
        setData({ ...data, loading: true })
        const select = event.target.value
        console.log("mes selecionado : ", select)

        try {
            await axios.get('http://multisoluction.ddns.net:9944/mes/' + select)

            setTimeout(() => {
                const fetchData = async () => {
                    try {
                        const [metricaResponse, analistaResponse, clienteResponse] = await Promise.all([
                            axios.get('http://multisoluction.ddns.net:9944/metrica'),
                            axios.get('http://multisoluction.ddns.net:9944/analistas'),
                            axios.get('http://multisoluction.ddns.net:9944/clientes')
                        ]);

                        setData({
                            loading: false,
                            messages: [

                                { metrica: metricaResponse.data },
                                { analista: analistaResponse.data },
                                { cliente: clienteResponse.data }
                            ]
                        });

                        console.log(metricaResponse.data)
                        if (metricaResponse.data.registros > 0) {
                            notify('Registros encontrados: ' + metricaResponse.data.registros)
                        } else {
                            notifyError('Nenhum registro encontrado')
                        }
                    } catch (err) {
                        console.error("Error fetching data:", err);
                        setData({
                            loading: false,
                            error: err.message // Adicione um estado de erro para lidar com falhas
                        });
                    }
                };

                fetchData();
                console.log("Dados atualizados com sucesso")
            }, 2000)

        }
        catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <div className={`${styles.content}`}>
                <select className={`${styles.form_select} form-select`} aria-label="Default select example" onChange={select}>

                    <option selected>Abril - 2025</option>
                    {meses.map((mes, index) => {
                        return (
                            <option key={index} value={mes.valor}  >{mes.mes}</option>
                        )
                    })}
                </select>
                <Alert />
            </div>
            {/* <button onClick={notify}>asdasd</button> */}

        </>
    )
}

export default SelectData;