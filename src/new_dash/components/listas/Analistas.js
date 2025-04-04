import Lista from "./Lista"
import ListaItem from "./ListaItem";

const Analistas = () => {
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
                {
                    clientes.map((item, index) => {
                        return(
                            <ListaItem alt={item.cliente} name={item.cliente} prop={`R$: ${item.valor.toFixed(2)}`} key={index}/>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Analistas