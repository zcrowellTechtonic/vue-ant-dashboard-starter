<template>
<div id="app">
  <h1 style="text-align: center">This a guage bruv</h1>
    <canvas id="guage-o-meter" height="175" width="175"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import Guage from './Guage.js';
export default {
  methods: {
  createChart(chartId, chartData) {
    var ctx = document.getElementById("guage-o-meter").getContext("2d");
    const myChart = new Chart(ctx, {
	type: "tsgauge",
	data: {
		datasets: [{
			backgroundColor: ["#0fdc63", "#fd9704", "#ff7143"],
			borderWidth: 0,
			gaugeData: {
				value: 66,
				valueColor: "#ff7143"
			},
			gaugeLimits: [0, 30, 70, 100]
		}]
	},
	options: {
            events: [],
            showMarkers: true
	}
});
  }
},
  name: 'app',
  data () {
return {
    Guage: Guage,
  }
  },
  mounted() {
  this.createChart('guage-o-meter', this.Guage);
}
}
</script>

<style>
#guage-o-meter {
 margin-top: -300px;
}
</style>
