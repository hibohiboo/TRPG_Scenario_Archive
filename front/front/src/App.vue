<template>
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
import CardTemplate from './components/cards/template/Udoncard.vue';
import CardList from './components/cards/list/CardList.vue';

export default defineComponent({
  name: 'App',
  components: {
    CardTemplate,
    CardList,
  },
});
</script>

<style>
  #app {

    color: #2c3e50;

  }
</style>
