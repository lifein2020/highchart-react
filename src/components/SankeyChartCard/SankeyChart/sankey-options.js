export const options = {
  title: "",
  chart: {
    backgroundColor: '#242427',
    height: '63.79%',
    margin: [27, 13, 23],
    style: {
      fontFamily: '\'Inter\', Arial, Helvetica, sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '15px',
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
      cursor: 'pointer',
      colors: ['#979797', '#8B75BA', '#DDAFD3', '#7EB8BF', '#77954D'],
      colorAxis: 0,
      colorByPoint: true,
      keys: ['from', 'to', 'weight', "color"],
      data: [
        [
          "Медведи<br>65%",
          "Мёд<br>50%",
          40,
          {
            linearGradient: { x1: 1, x2: 0, y1: 1, y2: 1 },
            stops: [
              [0, "rgba(139, 117, 186, 0.85)"],
              [1, "rgba(151, 151, 151, 0.85)"],
            ],
          },
        ],
        [
          "Медведи<br>65%",
          "Малина<br>20%",
          9,
          {
            linearGradient: { x1: 1, x2: 0, y1: 1, y2: 1 },
            stops: [
              [0, "rgba(221, 175, 211, 0.85)"],
              [1, "rgba(151, 151, 151, 0.85)"],
            ],
          },
        ],
        [
          "Медведи<br>65%",
          "Яблоки<br>30%",
          16,
          {
            linearGradient: { x1: 1, x2: 0, y1: 1, y2: 1 },
            stops: [
              [0, "rgba(126, 184, 191, 0.85)"],
              [1, "rgba(151, 151, 151, 0.85)"],
            ],
          },
        ],

        [
          "Ежи<br>35%",
          "Мёд<br>50%",
          10,
          {
            linearGradient: { x1: 1, x2: 0, y1: 1, y2: 1 },
            stops: [
              [0, "rgba(139, 117, 186, 0.85)"],
              [1, "rgba(119, 149, 77, 0.85)"],
            ],
          },
        ],
        [
          "Ежи<br>35%",
          "Малина<br>20%",
          11,
          {
            linearGradient: { x1: 1, x2: 0, y1: 1, y2: 1 },
            stops: [
              [0, "rgba(221, 175, 211, 0.85)"],
              [1, "rgba(119, 149, 77, 0.85)"],
            ],
          },
        ],
        [
          "Ежи<br>35%",
          "Яблоки<br>30%",
          14,
          {
            linearGradient: { x1: 1, x2: 0, y1: 1, y2: 1 },
            stops: [
              [0, "rgba(126, 184, 191, 0.85)"],
              [1, "rgba(119, 149, 77, 0.85)"],
            ],
          },
        ],
      ],

      name: 'Annual consumption',
      // names of nodes
      dataLabels: {
        style: {
          fontFamily: '\'Inter\', Arial, Helvetica, sans-serif',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '10px',
          lineHeight: '12.1px',
          color: '#FFFFFF',
          textOutline: false
        }
      },
      nodeWidth: 15, // The pixel width of each node in a sankey diagram
    }
  ]
}