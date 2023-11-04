<template>
  <div class="myhome">
    <h1 v-if="msg.length > 0">
      {{ msg }}
    </h1>
    <div class="sample2">
      <h1>問題ページ</h1>
      <router-link
        :to="{
          name: 'Kairo1',
          query: { id: profileId }
        }"
        >・回路１</router-link
      >
      <br />
      <br />
      <router-link to="kairo2">・回路2</router-link>
    </div>
    <div class="sample1">
      <Lank></Lank>
    </div>
    <div>
      <div class="chart">
        <h1>進捗</h1>
        <chart :data="data" ref="chart"></chart>
      </div>
    </div>
  </div>
</template>

<script>
//import myheader from "../components/myheader";
import Lank from "@/components/Lank";
import Chart from "@/components/chartCom";

export default {
  name: "myhome",
  components: {
    Lank,
    Chart
  },
  data() {
    return {
      msg: "ecWeb Home UI",
      profileId: 2,
      atai: 0,
      data: {
        labels: ["抵抗", "合成抵抗", "March", "April", "May", "June"],
        datasets: [
          {
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
          }
        ]
      }
    };
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
.sample1 {
  background: wheat;
  width: 17vw;
  height: 17vh;
  position: fixed;
  top: 17vw;
  right: 7vw;
}
.sample2 {
  background: wheat;
  width: 40vw;
  height: 150vh;
  position: absolute;
  top: 17vw;
  right: 30vw;
}
.chart {
  width: 25vw;
  height: 40vh;
  position: fixed;
  top: 17vw;
  left: 0vw;
}
</style>
