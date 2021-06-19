<template>
  <div class="p-d-flex">
    <div>
      <div>
        <h3>カード表</h3>
        <FrontTemplate />
      </div>
      <div>
        <h3>カード裏</h3>
        <BackTemplate />
      </div>
    </div>
    <div style="margin-left:1rem;">
      <CardList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BackTemplate from './components/cards/back/Udoncard.vue';
import FrontTemplate from './components/cards/front/Udoncard.vue';
import CardList from './components/cards/list/CardList.vue';
// TODO: BackとFrontほとんど同じなのでリファクタリングしたい
export default defineComponent({
  name: 'App',
  components: {
    BackTemplate,
    FrontTemplate,
    CardList,
  },
});
</script>

<style>
  #app {

    color: #2c3e50;

  }
</style>
