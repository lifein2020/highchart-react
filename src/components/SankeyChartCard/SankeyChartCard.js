import s from './SankeyChartCard.module.css';
import SankeyChart from './SankeyChart/SankeyChart';

const SankeyChartCard = () => {
    return <div className={s.card}>
      <h1 className={s.title}>Задача 1. Наша команда проводит исследование для службы безопасности леса. Нарисуй такую же диаграмму, иcпользуя Highcharts</h1>
      <div className={s.chartContainer}>
        <SankeyChart />
      </div>
    </div>
}

export default SankeyChartCard;