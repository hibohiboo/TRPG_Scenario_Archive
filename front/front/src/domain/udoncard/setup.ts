import {
  ref, defineComponent, onMounted, watchEffect, watch, reactive
} from 'vue';
import { loadData } from '../store';
import { draw } from './draw'

export const setup = () => {
  const data = reactive(loadData());

  // watchEffectだと #konva-container が描画される前に動いてしまう
  watch([data], () => {
    draw(data);
  },
    { deep: true });

  onMounted(() => {
    draw(data);
  });
  return {
    data
  };
}