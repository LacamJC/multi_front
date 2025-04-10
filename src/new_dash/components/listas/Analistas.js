import { useContext } from "react";
import DataContext from "../../../contexts/DataContext";
import ListaItem from "./ListaItem";

const Analistas = () => {
  const { data } = useContext(DataContext);
  const analistasData = data.messages && data.messages.find(item => item.analista);
  // console.log(analistasData);
  // console.log(analistas)
  // console.log(analistasData)

  const formatarParaReal = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };


  if (analistasData && analistasData.analista && analistasData.analista.length > 0) {
    console.log(analistasData.analista)

    return (
      <>
        <h1>Valor a pagar por Analista</h1>
        <ul className="list-group">
          {analistasData.analista.map((item, index) => (
            <ListaItem
              alt={item.nome}
              name={item.nome}
              prop={`${formatarParaReal(item.a_pagar)}`}
              key={index}
              hour={item.horas_apontadas}
            />
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <p className="alert alert-warning"> Sem informações sobre os analistas</p>
    );
  }
};

export default Analistas;