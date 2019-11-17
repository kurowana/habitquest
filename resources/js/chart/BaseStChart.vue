<script>
import { mapGetters } from "vuex";

import { Radar, mixins } from "vue-chartjs";

export default {
  name: "BaseStChart",
  extends: Radar,
  mixins: [mixins.reactiveData],
  props: {
    userStatus: null
  },
  data: function() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          text: "Status",
          fontColor: "blue"
        },
        scale: {
          ticks: { min: 0 },
          gridLines: {
            color: "ragb(255,255,0,0.2)"
          },
          angleLines: {
            display: true,
            color: "rgba(255,0,0,0.2)"
          },
          pointLabels: {
            fontColor: "FF0000",
            fontSize: "20"
          }
        },
        legend: {
          labels: {
            fontColor: "RED"
          }
        }
      }
    };
  },
  mounted: function() {
    // console.log(this.userStatus);
    // this.chartData = {
    //   labels: ["str", "agi", "vit", "int", "dex", "luc"],
    //   datasets: [
    //     {
    //       label: "status",
    //       data: [0, 0, 0, 0, 0, 0]
    //     }
    //   ]
    // };
    this.updateChart();
  },
  watch: {
    userStatus: {
      handler: function() {
        this.updateChart();
      },
      deep: true
    }
  },
  methods: {
    updateChart: function() {
      let newChart = {
        labels: ["STR", "AGI", "VIT", "INT", "DEX", "LUC"],
        datasets: [
          { label: "status", data: [], backgroundColor: "rgba(0,0,255,0.2)" }
        ]
      };
      Object.keys(this.userStatus).map(key => {
        newChart.datasets[0].data.push(this.userStatus[key]);
      });
      this.chartData = newChart;
    }
  }
};
</script>

<style>
</style>