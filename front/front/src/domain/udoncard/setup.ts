import {
  ref, defineComponent, onMounted, watchEffect, watch,
} from 'vue';
import { draw } from './draw'

export const setup = () => {
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
}