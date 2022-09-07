// Location of Vega-lite JSON file
var vg_1 = "daily_cost_bar_chart.vg.json";

// Embeds the chart produced by the JSON file into
// div "bar_chart"
vegaEmbed("#bar_chart", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);