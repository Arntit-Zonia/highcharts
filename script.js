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
    series: [
        {
            name: "John",
            data: [1, 0, 4]
        },
        {
            name: "Jane",
            data: [5, 7, 3]
        }
    ]
});

// ---------------------------------------

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

$(document).ready(()=> {
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
            text: "I'm learning"
        },
        borderWidth: 2,
        plotBackground: "rgba(255, 255, 255, .1)",
        plotShadow: true,
        plotBorderWidth: 1
    });
    let chart1 = new Highcharts.chart("container2", {
        xAxis: {
            type: "datetime"
        },
        series: [
            {
                name: "charteri",
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
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
        series: [
            {
                name: "charteroni",
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                pointStart: Date.UTC(2010, 0, 1),
                pointInterval: 3600 * 1000 // one hour
            }
        ]
    });
});