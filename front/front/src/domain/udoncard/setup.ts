import { ContainerConfig } from 'konva/lib/Container';
import {
  ref, defineComponent, onMounted, watchEffect, watch, reactive
} from 'vue';
import { createStore, loadData } from '../store';
import { draw } from './draw'
import cloneDeep from 'lodash/cloneDeep'
export const setup = () => {
  const store = createStore();

  const updateData = (d: ContainerConfig) => {
    store.state.data = d;
  }

  // watchEffectだと #konva-container が描画される前に動いてしまう
  // watchにオブジェクトの変化を認識させるために、cloneDeepが必要
  watch(() => cloneDeep(store.state), (s) => {
    draw(s.data, updateData);
  });

  onMounted(() => {
    draw(store.state.data, updateData);
  });
  return {
    store
  };
}