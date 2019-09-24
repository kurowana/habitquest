<script>
import { mapGetters } from "vuex";

import { Radar } from "vue-chartjs";

export default {
  name: "BaseStChart",
  extends: Radar,
  computed: {
    ...mapGetters({
      baseSt: "getBaseSt"
    })
  },
  data: function() {
    return {
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            name: "Series 1",
            data: [60, 50, 30, 40, 100, 60]
          }
        ]
      },
      options: {
        title: {
          text: "Basic Radar Chart"
        },
        scale: {
          ticks: { min: 0 }
        }
      }
    };
  },
  mounted: function() {
    console.log(this.baseSt);
    this.renderChart(this.chartData, this.options);
  }
};
</script>

<style>
</style>