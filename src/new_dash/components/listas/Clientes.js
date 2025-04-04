import Lista from "./Lista"
import ListaItem from "./ListaItem";
const Clientes = () => {

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

export default Clientes