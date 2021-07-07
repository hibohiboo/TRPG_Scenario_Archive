<template>
  <div>
    <div><input v-model="a" type="number"></div>
    <div><canvas id="myChart" width="400" height="400" /></div>

    <label>
      <Dropdown placeholder="テンプレートを選択" :options="[{label: 'インセイン',value:'default'},{label:'LOSTRPGランダム障害カード',value:'lost'}]" option-label="label" option-value="value" @change="changeTemplate" />
    </label>
  </div>
  <div class="p-d-flex">
    <div>
      <div>
        <h3>カード表</h3>
        <CardTemplate container-id="template-card-front" />
      </div>
      <div>
        <h3>カード裏</h3>
        <CardTemplate container-id="template-card-back" />
      </div>
    </div>
    <div style="margin-left:1rem;">
      <CardList />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watchEffect,
} from 'vue';
import Dropdown from 'primevue/dropdown';
import Chart from 'chart.js/auto';

import CardTemplate from './components/cards/template/Udoncard.vue';
import CardList from './components/cards/list/CardList.vue';
import {
  lostCsv, lostFront, lostBack, lostBackImage, lostUdonArgs,
} from './domain/lostrpg/template';

const drawChart = (a:number, chart: Chart | null) => {
  const canvas = document.getElementById('myChart') as HTMLCanvasElement;
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  if (chart) {
    chart.destroy();
  }
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [a, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export default defineComponent({
  name: 'App',
  components: {
    CardTemplate,
    CardList,
    Dropdown,
  },
  setup() {
    const a = ref(1);

    let chart: null | Chart;

    watchEffect(() => {
      chart = drawChart(a.value, chart);
    });
    setTimeout(() => { a.value = 2; }, 100);

    return {
      a,
      changeTemplate: (event:{value:string}) => {
        // eslint-disable-next-line no-alert
        if (!window.confirm('現在のデータは破棄されます。よろしいですか？')) {
          return;
        }
        switch (event.value) {
          case 'lost':
            localStorage.setItem('template-card-front', JSON.stringify(lostFront));
            localStorage.setItem('template-card-back', JSON.stringify(lostBack));
            localStorage.setItem('sa-csv-key', lostCsv);
            localStorage.setItem('sa-udonarium-card-config', JSON.stringify(lostUdonArgs));
            sessionStorage.setItem('template-card-back-images', JSON.stringify(lostBackImage));
            break;
          default: localStorage.clear(); sessionStorage.clear();
        }
        window.location.reload();
      },
    };
  },
});
</script>

<style>
  #app {

    color: #2c3e50;

  }
</style>
