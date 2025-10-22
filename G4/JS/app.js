// Data retrieved from https://olympics.com/en/olympic-games/beijing-2022/medals
Highcharts.chart('container', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Medallas de oro por país — Beijing 2022'
    },
    subtitle: {
        text: 'Gráfico de dona 3D en Highcharts'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Medallas de oro',
        data: [
            ['Noruega', 16],
            ['Alemania', 12],
            ['Colombia', 32],
            ['Estados Unidos', 5],
            ['Suecia', 8],
            ['Países Bajos', 8],
            ['ROC (Comité Olímpico Ruso)', 1],
            ['Austria', 7],
            ['Canadá', 6],
            ['Japón', 3]

        ]
    }]
});
