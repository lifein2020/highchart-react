import './App.css';
import React from 'react'
import SankeyChartCard from './components/SankeyChartCard/SankeyChartCard';
import DonutChartCard from './components/DonutChartCard/DonutChartCard';

const App = () => {
  return <div className='wrapper'>
    <SankeyChartCard />
    <DonutChartCard />
  </div>
}

export default App;
