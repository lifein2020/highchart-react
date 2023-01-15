import React from 'react';
import { options } from "./sankey-options";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import sankey from 'highcharts/modules/sankey.js';
sankey(Highcharts);

const SankeyChart = () => {
    return <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
}

export default SankeyChart;