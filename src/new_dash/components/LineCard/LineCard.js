import DataContext from '../../../contexts/DataContext'
import { useContext, useState } from 'react'
import Card from '../Card/Card';

const LineCard = () => {
    const { data } = useContext(DataContext)
    const metricData = data.messages && data.messages.find(item => item.metrica);

    const formatarParaReal = (valor) => {
        return valor.toLocaleString('pt-BR', {
            styles: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    }
    
    if (metricData && metricData.metrica) {
        const aPagarAnalistas = metricData.metrica.a_pagar_analistas;
        const fatoramentoTotal = metricData.metrica.fatoramento.total;
        const totalHorasApontadas = metricData.metrica.total_horas_apontadas;

        return (
            <>
                <Card
                    titulo="Horas"
                    descricao={totalHorasApontadas}
                />

                <Card
                    titulo="Faturamento"
                    descricao={`R$: ${formatarParaReal(fatoramentoTotal)}`}
                />

                <Card
                    titulo="Analistas"
                    descricao={`R$: ${formatarParaReal(aPagarAnalistas)}`}
                />
            </>
        );
    } else {
        return <p className='alert alert-warning'> Sem informações sobre as métricas</p>;
    }
}

export default LineCard