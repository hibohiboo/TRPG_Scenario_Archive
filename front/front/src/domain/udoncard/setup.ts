import { ContainerConfig } from 'konva/lib/Container';
import {
  ref, defineComponent, onMounted, watchEffect, watch, reactive
} from 'vue';
import { loadData } from '../store';
import { draw } from './draw'
import cloneDeep from 'lodash/cloneDeep'
export const setup = () => {
  const data = reactive(loadData());
  const updateData = (d: ContainerConfig) => {
    console.log('test', d)
    data.children = d.children;
  }

  // watchEffectだと #konva-container が描画される前に動いてしまう
  watch(() => cloneDeep(data), (d) => {
    draw(d, updateData);
  });

  onMounted(() => {
    draw(data, updateData);
  });
  return {
    data
  };
}