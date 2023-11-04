<template>
  <div>
    <h1>棒グラフと線グラフ</h1>
    <input v-model="atai" type="number" />
    <button v-on:click="ahaha()">更新</button>
    <div class="chart">
      <chart :data="data" ref="chart"></chart>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/chartCom";

export default {
  components: {
    Chart
  },
  data() {
    return {
      atai: 0,
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Bar Dataset",
            data: [10, 20, 40, 40, 50, 30],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          },
          {
            label: "Line Dataset",
            data: [10, 50, 20, 30, 30, 40],
            borderColor: "#CFD8DC",
            fill: false,
            type: "line",
            lineTension: 0.3
          }
        ]
      }
    };
  },
  created() {
    console.log("aa");
  },
  methods: {
    ahaha() {
      this.data.datasets[0].data[0] = this.atai;
      this.$refs.chart.make();
    }
  }
};
</script>

<style media="screen">
* {
  /* 初期化 */
  margin: 0px;
  padding: 0px;
}
.chart {
  width: 1200px;
  height: 1000px;
  position: static;
  top: 200px;
  right: 100px;
}
</style>
