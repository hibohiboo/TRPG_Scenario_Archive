<template>
  {{ points }}
  <div id="konva-container">
    test
  </div>
  {{ x }}

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
    const x = ref(0);
    const points = ref([{ x: 0, y: 0 }, { x: 0, y: 0 }]);

    const value = ref('test');
    // watchEffectだと #konva-container が描画される前に動いてしまう
    watch([value], () => {
      draw(value.value, points.value, x);
    });

    onMounted(() => {
      draw(value.value, points.value, x);
    });
    return {
      value,
      points,
      x,
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
