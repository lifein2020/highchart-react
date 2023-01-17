export const options = {
  chart: {
    type: 'pie',
    backgroundColor: '#4E4E4E',
    height: '72%',
    padding: 0,
    marginTop: 32.28,
    marginBottom: 47.8,
    style: {
      fontFamily: "'Inter', Arial, Helvetica, sans-serif",
      fontStyle: 'normal',
      fontWeight: 400,
      color: '#FFFFFF',
    },
  },

  title: {
    text: '<b>215',
    align: 'center',
    verticalAlign: 'middle',
    y: 4,
    style: {
      fontSize: '30px',
      lineHeight: '10px',
      color: '#FFFFFF',
    },
  },

  subtitle: {
    text: '133 (+74)<br>82',
    align: 'left',
    verticalAlign: 'middle',
    x: 139,
    y: 24,
    style: {
      fontSize: '12px',
      lineHeight: '15px',
      color: '#FFFFFF',
    },
  },

  accessibility: {
    announceNewData: {
      enabled: true
    },
    point: {
      valueSuffix: '%'
    }
  },

  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '{point.y:.1f}%',
        style: {
          fontSize: '18px',
          lineHeight: '15px',
        },
        // connector line from diagram to dataLabels
        alignTo: 'connectors',
        connectorShape: 'straight',
        connectorWidth: 1,
        connectorColor: '#FFFFFF',
        distance: 24,
      },
      showInLegend: true,
      size: '80',
      startAngle: 158, // The start angle of the pie slices in degrees
    },
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
          y: 62,
        },
        {
          name: 'Не зашифровано',
          y: 38,
        },
      ],
      borderWidth: 0,
      center: ["50%", "50%"],
      colors: ['#77954D', '#979797'],
      size: 155.76, //'100%',
      innerSize: '78%',
    }
  ],
};