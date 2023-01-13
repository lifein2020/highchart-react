export const options = {
    chart: {
      type: 'pie',
      backgroundColor: '#4E4E4E',
      height: '63.79%', //181,
      style: {
          'fontFamily': '\'Inter\', Arial, Helvetica, sans-serif',
          'fontStyle': 'normal',
          'fontWeight': 400,
          'fontSize': '12px',
          'lineHeight': '15px',
          color: '#FFFFFF',
      },
    },

    title: "",

    accessibility: {
      announceNewData: {
        enabled: true
      },
      point: {
        valueSuffix: '%'
      }
    },

    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
        },
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
      {
        name: 'Разум молодых людей в Омске',
        colorByPoint: true,
        data: [
          {
            name: 'Зашифровано',
            y: 38,
          },
          {
            name: 'Незашифровано',
            y: 62,
          },
        ],
        borderWidth: 0,
        center: ["50%", "50%"],
        colors: [
            '#979797',
            '#77954D',
        ],
        size: '100%',
        innerSize: '70%',
      }
    ],

    legend: {
        margin: 23.49,
        align: 'center',
        labelFormat: '<span style="font-size:12px">{point.name}</span>',
        // borderRadius: 14.67,
        // backgroundColor: '#77954D',
        // itemCheckboxStyle: {
        //     "width": "14.67px", "height": "14.67px", "position": "absolute"
        // },
        // itemDistance: 17.7,
        // itemMarginBottom: 48.98,

    },
    
  }