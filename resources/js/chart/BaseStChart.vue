<script>
import { mapGetters } from "vuex";

import { Radar, mixins } from "vue-chartjs";

export default {
  name: "BaseStChart",
  extends: Radar,
  mixins: [mixins.reactiveData],
  props: {
    baseSt: null
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
    this.chartData = {
      labels: ["str", "agi", "vit", "int", "dex", "luc"],
      datasets: [
        {
          label: "status",
          data: [0, 0, 0, 0, 0, 0]
        }
      ]
    };
  },
  watch: {
    baseSt: function() {
      console.log(this.baseSt);
      this.updateChart();
    }
  },
  methods: {
    updateChart: function() {
      let newChart = {
        labels: ["str", "agi", "vit", "int", "dex", "luc"],
        datasets: [{ label: "status", data: [] }]
      };
      Object.keys(this.baseSt).map(key => {
        newChart.datasets[0].data.push(this.baseSt[key]);
      });
      this.chartData = newChart;
    }
  }
};
</script>

<style>
</style>