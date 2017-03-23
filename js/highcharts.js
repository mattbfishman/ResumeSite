$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Technical Skills'
        },
        xAxis: {
            categories: ['Java', 'HTML', 'CSS', 'JavaScript', 'Python', 'git', 'mySQL', 'MongoDb', 'Agile/Scrum', 'Waterfall' ],
            title: {
                text: null
            }
        },
        
        yAxis: {
            min: 0,
            title: {
                text: 'Experience (years)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' years'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Experience',
            data: [4, 6, 6, 4, 2, 2, 2, 2, 3, 3 ]
        }]
    });
});