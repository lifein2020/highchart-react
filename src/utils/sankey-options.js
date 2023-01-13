export const options = {
    title: '',
    // title: {
    //     text: 'Задача 1. Наша команда проводит исследование для службы безопасности леса. Нарисуй такую же диаграмму, иcпользуя Highcharts',
    //     align: 'left',
    //     // The position of the title relative to the chart
    //     margin: 59,
    //     //The x position of the title relative to the alignment within chart.spacingLeft and chart.spacingRight.
    //     x: 20,
    //     style: {
    //         'fontFamily': '\'Inter\', sans-serif', // \'Lucida Sans Unicode\', Verdana, Arial, Helvetica,
    //         'fontStyle': 'normal',
    //         'fontWeight': 400,
    //         'fontSize': '12px',
    //         'lineHeight': '15px',
    //          color: '#FFFFFF',
    //     },
    // },
    chart: {
        backgroundColor: '#242427',
        height: '63.79%', //181,
        style: {
            'fontFamily': '\'Inter\', sans-serif', // \'Lucida Sans Unicode\', Verdana, Arial, Helvetica,
            'fontStyle': 'normal',
            'fontWeight': 400,
            'fontSize': '12px',
            'lineHeight': '15px',
            color: '#FFFFFF',
        },
    },
    tooltip: {
      headerFormat: '{point.name}',
      pointFormat: '{point.fromNode.name} \u2192 {point.toNode.name}: {point.weight} %',
      nodeFormat: '{point.name}: {point.sum} %'
    },
    series: [
      {
        type: 'sankey',
        // backgroundColor: '#4E4E4E',
        colors: [
          '#979797',
          '#8B75BA',
          '#DDAFD3',
          '#7EB8BF',
          '#77954D',
        ],
        // Linear gradient used as a color option
        color: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [1, '#979797'], // start
            //[0.5, '#ffffff'], // middle
            [0, '#8B75BA'] // end
          ],
          stops: [
            [1, '#979797'], // start
            //[0.5, '#ffffff'], // middle
            [0, '#DDAFD3'] // end
          ],
          stops: [
            [1, '#979797'], // start
            //[0.5, '#ffffff'], // middle
            [0, '#7EB8BF'] // end
          ],
  
          stops: [
            [1, '#77954D'], // start
            //[0.5, '#ffffff'], // middle
            [0, '#8B75BA'] // end
          ],
          stops: [
            [1, '#77954D'], // start
            //[0.5, '#ffffff'], // middle
            [0, '#DDAFD3'] // end
          ],
          stops: [
            [1, '#77954D'], // start
            //[0.5, '#ffffff'], // middle
            [0, '#7EB8BF'] // end
          ],
        },
        keys: ['from', 'to', 'weight'],
        data: [
          ['Медведи<br>65%', 'Мёд<br>50%', 35],
          ['Медведи<br>65%', 'Малина<br>20%', 8],
          ['Медведи<br>65%', 'Яблоки<br>30%', 15],
          
          ['Ежи<br>35%', 'Мёд<br>50%', 15],
          ['Ежи<br>35%', 'Малина<br>20%', 12],
          ['Ежи<br>35%', 'Яблоки<br>30%', 15],
        ],
        
        name: 'Annual consumption',
        // names of nodes
        dataLabels: {
          style: {
            'fontFamily': '\'Inter\', sans-serif', // \'Lucida Sans Unicode\', Verdana, Arial, Helvetica,
            'fontStyle': 'normal',
            'fontWeight': 400,
            'fontSize': '10px',
            'lineHeight': '12.1px',
            color: '#FFFFFF',
            textOutline: false
          }
        },
        linkOpacity: 1, //Opacity for the links
        opacity: 0.8, //Opacity for the nodes
        nodeWidth: 15, // The pixel width of each node in a sankey diagram
      }
    ]
  }