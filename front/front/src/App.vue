<template>
  <div>
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
import { defineComponent } from 'vue';
import Dropdown from 'primevue/dropdown';
import CardTemplate from './components/cards/template/Udoncard.vue';
import CardList from './components/cards/list/CardList.vue';
import {
  lostCsv, lostFront, lostBack, lostBackImage,
} from './domain/lostrpg/template';

export default defineComponent({
  name: 'App',
  components: {
    CardTemplate,
    CardList,
    Dropdown,
  },
  setup() {
    return {
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
