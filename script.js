let myChart = Highcharts.chart("container0", {
    chart: {
        type: "bar"
    },
    title: {
        text: "Fruit Consumption"
    },
    xAxis: {
        categories: ["Apples", "Bananas", "Oranges"]
    },
    yAxis: {
        title: {
            text: "Fruit eaten"
        }
    },
    series: [{
            name: "John",
            data: [1, 0, 4]
        },
        {
            name: "Jane",
            data: [5, 7, 3]
        }
    ]
});

let options = {
    chart: {
        renderTo: "container1",
        type: "bar"
    },
    title: {
        text: "My Chart"
    },
    series: [{
        name: "Jane",
        data: [1, 0, 4]
    }]
}

$(document).ready(() => {
    let chart = new Highcharts.chart(options);
});

options.series.push({
    name: "John",
    data: [3, 4, 2]
});

$(() => {
    Highcharts.setOptions({ // sets options for nested obj
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 0, 0],
                stops: [
                    [0, "rbg(255, 255, 255)"],
                    [1, "rgb(255, 255, 255)"]
                ]
            }
        },
        title: { //sets title for nested objects
            text: "I'm learning",
            style: {
                color: "red"
            }
        },
        subtitle: {
            text: "Sugoi"
        },
        borderWidth: 2,
        plotBackground: "rgba(255, 255, 255, .1)",
        plotShadow: true,
        plotBorderWidth: 1
    });

    let charteri = new Highcharts.chart("container2", {
        xAxis: {
            title: {
                text: "Such Data, Much Wow"
            },
            type: "datetime"
        },
        yAxis: [{
            title: {
                text: "Brilhante"
            },
            title: {
                text: "Opaco",
            },
            labels: {
                formatter: function () {
                    return this.value + " %"
                }
            },
            type: "logarithmic"
        }],
        series: [{
                name: "charteri",
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                pointStart: Date.UTC(210, 0, 1),
                pointInterval: 3600 * 1000 // one hour
            },
            {
                name: "charteri2",
                data: [29.9, 40, {y:200, marker: {fillColor: "green", radius: 8}}, 160, 144.0, 176.0, 63.6, 200, {y: 516.4, color: "red"}, 158.1, 90.6, 90.4],
                pointStart: Date.UTC(210, 0, 1),
                pointInterval: 3600 * 1000 // one hour
            },
            {
                name: "charteri3",
                data: [129.9, 140, 80, 60, 170.0, 76.0, 40.6, 100, 216.4, 58.1, 200.6, 40.4],
                pointStart: Date.UTC(210, 0, 1),
                pointInterval: 3600 * 1000 // one hour
            }
        ]
    });

    let chart2 = new Highcharts.chart("container3", {
        chart: {
            type: "column"
        },
        xAxis: {
            type: "datetime"
        },
        series: [{
            name: "charteroni",
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            pointStart: Date.UTC(2010, 0, 1),
            pointInterval: 3600 * 1000 // one hour
        }]
    });
});
