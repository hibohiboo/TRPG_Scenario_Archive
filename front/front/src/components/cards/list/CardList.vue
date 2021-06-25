<template>
  <div>
    <h3>カード一覧</h3>
    <div>
      <Button label="ユドナリウム用zipダウンロード" @click="zipHandler" />
    </div>
    <details open>
      <summary>CSV入力</summary>
      <Textarea v-model="csv" :auto-resize="true" cols="50" />
    </details>
    <div v-for="(item, index) in csv.split('\n')" :key="index" class="p-d-flex">
      <div :id="`${frontId}-${index}`" />
      <div :id="`${backId}-${index}`" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, onUpdated, ref, watchEffect,
} from 'vue';

import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
// eslint-disable-next-line import/no-unresolved
import { draw } from '@/domain/cardList/draw';
// eslint-disable-next-line import/no-unresolved
import { createZip } from '@/domain/cardList/udonEvent';
import { BACK_GROUND_IMAGE_GROUP_INDEX, CARD_LAYER_INDEX, loadBackgroundImage } from '@/domain/cards/store';

const pc1 = 'PC1,校門で君は気づいた。\\n外に出られない。赤い赤い夕焼け空。長い長い黒い影。誰もいないグラウンド。音のしない校舎。風のない蒸し暑い空気。時計は 4 時 44 分 44 秒.校門に集まっているやつらの誰も、帰り方を知らない。君も分からない。君の使命は【家に帰る】ことである。,なし,秘密を見てはならない。';
const pc2 = 'PC2,校門で君は気づいた。\\n外に出られない。赤い赤い夕焼け空。長い長い黒い影。誰もいないグラウンド。音のしない校舎。風のない蒸し暑い空気。時計は 4 時 44 分 44 秒.校門に集まっているやつらの誰も、帰り方を知らない。君も分からない。君の使命は【家に帰る】ことである。,なし,秘密を見てはならない。';
const text = `${pc1}
${pc2}`;
const csvKey = 'sa-csv-key';
const replacePlaceHolder = (str:string, json:string) => {
  let result = json;
  str.split(',').forEach((t, i) => {
    result = result.replaceAll(new RegExp(`\\$${i + 1}`, 'g'), t);
  });
  return result;
};
const drawImage = (key:string, row:string, index:number) => {
  const card = localStorage.getItem(key);

  if (card) {
    const cardData = JSON.parse(replacePlaceHolder(row, card));
    loadBackgroundImage(key, cardData);

    draw(`${key}-${index}`, cardData);
  }
};

export default defineComponent({
  name: 'CardList',
  components: { Textarea, Button },
  setup() {
    const loadCsv = localStorage.getItem(csvKey) || text;
    const csv = ref(loadCsv);
    const backId = 'template-card-back';
    const frontId = 'template-card-front';

    onMounted(() => {
      watchEffect(() => {
        localStorage.setItem(csvKey, csv.value);
        csv.value.split('\n').forEach((row, index) => {
          drawImage(backId, row, index);
          const front = localStorage.getItem(frontId);
          if (front) {
            draw(`${frontId}-${index}`, JSON.parse(replacePlaceHolder(row, front)));
          }
        });
      });
    });
    const zipHandler = () => {
      createZip(csv.value.split('\n'));
    };

    return {
      backId,
      frontId,
      csv,
      zipHandler,
    };
  },
});
</script>

<style>
  #app {

    color: #2c3e50;

  }
</style>
