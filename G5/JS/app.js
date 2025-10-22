Highcharts.chart('container', {

    chart: {
        type: 'columnrange',
        inverted: true
    },

    accessibility: {
        description: 'Descripción de la imagen: Un gráfico de rangos de columnas compara las ' +
            'variaciones mensuales de temperatura durante 2025 en Colombia. ' +
            'El gráfico es interactivo y muestra el rango de temperatura ' +
            'para cada mes al pasar el cursor sobre los datos. La ' +
            'temperatura se mide en grados Celsius en el eje X y ' +
            'los meses se representan en el eje Y. La temperatura más baja se ' +
            'registra en julio con 14.8 grados Celsius. El rango más bajo de ' +
            'temperaturas se encuentra en junio, variando desde un mínimo de 15.1 ' +
            'hasta un máximo de 25.2 grados Celsius. La temperatura más alta se registra en ' +
            'febrero con 29.1 grados Celsius, y el mes con mayor variación de temperaturas ' +
            'es enero, con rango desde 16.8 hasta 28.5 grados Celsius'
    },

    title: {
        text: 'Variación de temperatura por mes'
    },

    subtitle: {
        text: 'Observado en el IDEAM, Colombia, 2025 | ' +
            'Fuente: <a href="http://archivo.ideam.gov.co/web/tiempo-y-clima/climatologico-mensual" target="_blank">IDEAM</a>'
    },

    xAxis: {
        categories: [
            'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
            'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
        ]
    },

    yAxis: {
        title: {
            text: 'Temperatura ( °C )'
        }
    },

    tooltip: {
        valueSuffix: '°C'
    },

    plotOptions: {
        columnrange: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true,
                format: '{y}°C'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Temperaturas',
        data: [
            [16.8, 28.5],
            [17.2, 29.1], 
            [16.5, 27.8], 
            [15.9, 26.4], 
            [15.3, 25.9], 
            [15.1, 25.2], 
            [14.8, 24.7], 
            [15.0, 26.1], 
            [15.7, 27.3], 
            [16.1, 27.9], 
            [16.4, 28.2], 
            [16.6, 28.8]  
        ]
    }]

});
