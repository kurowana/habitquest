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
            color: "ragb(0,255,0,1)"
          },
          angleLines: {
            display: true,
            color: "rgba(255,220,220,1)"
          },
          pointLabels: {
            fontColor: "#FFFFFF",
            fontSize: "20"
          }
        },
        legend: {
          labels: {
            fontColor: "#FF9999"
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
          {
            label: "status",
            data: [],
            backgroundColor: "rgba(255,255,0,0.6)"
          }
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