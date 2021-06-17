<template>
  <div id="konva-container">
    test
  </div>
  <Textarea v-model="value" rows="5" cols="30" />
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import {
  ref, defineComponent, onMounted, watchEffect, watch,
} from 'vue';
import Textarea from 'primevue/textarea';
// eslint-disable-next-line import/extensions
import { draw } from '../../domain/udoncard/setup';

export default defineComponent({
  name: 'Udoncard',
  components: { Textarea },
  setup: () => {
    const products = ref([
      {
        title: 'サンプル',
        auther: 'noname',
        description: '詳細',
      },
      {
        title: 'サンプル2',
        auther: '詳細未記入',
      },
    ]);

    const value = ref('test');
    watch([value], () => {
      draw(value.value);
    });

    onMounted(() => {
      draw(value.value);
    });
    return {
      products,
      value,
    };
  },
});
</script>

<style scoped>
  .sa-ly-width{
    width: 80%;
    margin-left:auto;
    margin-right:auto;
  }
  .sa-co-width{
    width:100%
  }

</style>
