import './App.css';
import React from 'react'
import SankeyChart from './components/SankeyChart/SankeyChart';
import DonutChart from './components/DonutChart/DonutChart';


const App = () => {
  return <div className='wrapper'>
    <div className="card">
      <h1 className="title">Задача 1. Наша команда проводит исследование для службы безопасности леса. Нарисуй такую же диаграмму, иcпользуя Highcharts</h1>
      <div className='chart'>
        <SankeyChart />
      </div>
    </div>

    <div className="card">
      <h1 className="title">Задача 2. Наша команда изучает влияние криптовалют на неокрепший разум молодых людей в Омске.<br />Нарисуй такую же диаграмму, иcпользуя Highcharts</h1>
      <div className='chart'>
        <DonutChart />
      </div>
    </div>
  </div>
}

export default App;
