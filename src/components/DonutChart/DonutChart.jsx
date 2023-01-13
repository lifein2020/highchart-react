import React from 'react';
import { options } from "./../../utils/donut-options";
import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import PieChart from "highcharts-react-official";

const DonutChart = () => {
    return <PieChart
        highcharts={Highcharts}
        options={options}
    />
}

export default DonutChart;