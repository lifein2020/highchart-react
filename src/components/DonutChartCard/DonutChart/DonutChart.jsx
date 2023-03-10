import React from 'react';
import { options } from "./donut-options";
import Highcharts from 'highcharts';
import PieChart from "highcharts-react-official";

const DonutChart = () => {
    return <PieChart
        highcharts={Highcharts}
        options={options}
    />
}

export default DonutChart;