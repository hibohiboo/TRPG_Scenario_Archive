<template>
  <div>
    <h3>カード表</h3>
    <FrontTemplate />
  </div>
  <div>
    <h3>カード裏</h3>
    <BackTemplate />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BackTemplate from './components/cards/back/Udoncard.vue';
import FrontTemplate from './components/cards/front/Udoncard.vue';
// TODO: BackとFrontほとんど同じなのでリファクタリングしたい
export default defineComponent({
  name: 'App',
  components: {
    BackTemplate,
    FrontTemplate,
  },
});
</script>

<style>
  #app {

    color: #2c3e50;

  }
</style>
