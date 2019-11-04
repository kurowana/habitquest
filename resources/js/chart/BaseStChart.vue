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
          text: "Basic Radar Chart"
        },
        scale: {
          ticks: { min: 0 }
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
        labels: ["str", "agi", "vit", "int", "dex", "luc"],
        datasets: [{ label: "status", data: [] }]
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