<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  name: "chart",
  props: {
    data: {}
  },
  data() {
    return {
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Month"
              }
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true
              },
              ticks: {
                beginAtZero: true,
                stepSize: 10
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
  methods: {
    make() {
      this.renderChart(this.data, this.options);
    }
  }
};
</script>
