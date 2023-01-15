import s from './DonutChartCard.module.css';
import DonutChart from './DonutChart/DonutChart';

const DonutChartCard = () => {
    return <div className={s.card}>
        <h1 className={s.title}>Задача 2. Наша команда изучает влияние криптовалют на неокрепший разум молодых людей в Омске.<br />Нарисуй такую же диаграмму, иcпользуя Highcharts</h1>
        <div className={s.chartContainer}>
            <DonutChart />
        </div>
    </div>
}

export default DonutChartCard;