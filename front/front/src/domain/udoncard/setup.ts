import { ContainerConfig } from 'konva/lib/Container';
import {
  ref, defineComponent, onMounted, watchEffect, watch, reactive
} from 'vue';
import { loadData } from '../store';
import { draw } from './draw'
import cloneDeep from 'lodash/cloneDeep'
export const setup = () => {
  const store = reactive({
    data: loadData()
  });
  const data = reactive(loadData());
  const updateData = (d: ContainerConfig) => {
    store.data = d;
  }

  // watchEffectだと #konva-container が描画される前に動いてしまう
  // watchにオブジェクトの変化を認識させるために、cloneDeepが必要
  watch(() => cloneDeep(store), (s) => {
    draw(s.data, updateData);
  });

  onMounted(() => {
    draw(store.data, updateData);
  });
  return {
    store
  };
}