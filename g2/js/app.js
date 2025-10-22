(async () => {

    Highcharts.chart('container', {
        chart: {
            zooming: {
                type: 'x'
            },
            backgroundColor: '#9eb3a031'
        },
        title: {
            text: 'Tipo de cambio de USD a EUR a lo largo del tiempo'
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                'Haga clic y arrastre en el área del gráfico para ampliar.' :
                'Pellizque el gráfico para ampliarlo'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Tipo de cambio'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, 'rgb(38, 166, 91)'],           // Verde vibrante arriba
                        [0.7, 'rgba(18, 68, 26, 0.86)']          // Verde oscuro abajo
                    ]
                },
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'USD a EUR',
            data: [
                [Date.UTC(2020, 0, 1), 0.40],
                [Date.UTC(2021, 1, 1), 0.60],
                [Date.UTC(2022, 2, 1), 0.80],
                [Date.UTC(2023, 3, 1), 1.00],
                [Date.UTC(2024, 4, 1), 0.90],
                [Date.UTC(2025, 5, 1), 1.60],
            ]
        }]
    });
})();
