<template>
  <div class="p-grid p-jc-center">
    <div class="p-col">
      <div id="konva-container" />
    </div>
    <div class="p-col">
      <Accordion :active-index="0">
        <AccordionTab header="テキスト">
          <div v-for="item in store.state.data.children[store.const.layerIndex].children[store.const.textGroupIndex].children" :key="item" class="sa-edit-item">
            <Textarea v-model="item.attrs.text" :auto-resize="true" />
            <details>
              <summary>位置</summary>
              <label style="display:block">
                x:
                <InputText
                  v-model.number="item.attrs.x"
                  type="number"
                />
              </label>
              <label style="display:block">
                y:
                <InputText
                  v-model.number="item.attrs.y"
                  type="number"
                />
              </label>
            </details>
            <details>
              <summary>詳細</summary>
              <label style="display:block">
                サイズ:
                <InputText
                  v-model.number="item.attrs.fontSize"
                  type="number"
                />
                <label style="display:block">
                  文字色:
                  <InputText
                    v-model.number="item.attrs.fill"
                    type="color"
                  />
                </label>
                <label style="display:block">
                  文字位置(left/center/right):
                  <InputText
                    v-model.number="item.attrs.align"
                    type="text"
                  />
                </label>
                <label style="display:block">
                  幅:
                  <InputText
                    v-model.number="item.attrs.width"
                    type="number"
                  />
                </label>
              </label>
            </details>
          </div>
          <div class="p-grid" style="margin: 10px">
            <Button label="追加" icon="pi pi-plus" icon-pos="right" style="display:block" class="p-offset-1 p-col" @click="()=>store.addNewText()" />
            <Button label="削除" icon="pi pi-minus" icon-pos="right" style="display:block" class="p-offset-2 p-col p-button-danger" />
          </div>
        </AccordionTab>
        <AccordionTab header="枠">
          <div v-for="item in store.state.data.children[store.const.layerIndex].children[store.const.frameGroupIndex].children" :key="item" class="sa-edit-item">
            <label style="display:block">
              width:
              <InputText
                v-model.number="item.attrs.width"
                type="number"
                min="0"
              />
            </label>
            <label style="display:block">
              height:
              <InputText
                v-model.number="item.attrs.height"
                type="number"
                min="0"
              />
            </label>
            <details>
              <summary>位置</summary>
              <label style="display:block">
                x:
                <InputText
                  v-model.number="item.attrs.x"
                  type="number"
                />
              </label>
              <label style="display:block">
                y:
                <InputText
                  v-model.number="item.attrs.y"
                  type="number"
                />
              </label>
            </details>
            <details>
              <summary>詳細設定</summary>
              <label style="display:block">
                枠線幅:
                <InputText
                  v-model.number="item.attrs.strokeWidth"
                  type="number"
                  min="0"
                />
              </label>
              <label style="display:block">
                線の色:
                <input
                  v-model.number="item.attrs.stroke"
                  type="color"
                >
              </label>
              <label style="display:block">
                塗りつぶしの色:
                <input
                  v-model.number="item.attrs.fill"
                  type="color"
                >
              </label>
              <label style="display:block">
                角丸:
                <InputText
                  v-model.number="item.attrs.cornerRadius"
                  type="number"
                  min="0"
                />
              </label>
            </details>
          </div>
          <div class="p-grid" style="margin: 10px">
            <Button label="追加" icon="pi pi-plus" icon-pos="right" style="display:block" class="p-offset-1 p-col" @click="()=>store.addNewText()" />
            <Button label="削除" icon="pi pi-minus" icon-pos="right" style="display:block" class="p-offset-2 p-col p-button-danger" />
          </div>
        </AccordionTab>
        <AccordionTab header="Header III">
          Content
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import {
  ref, defineComponent, onMounted, watchEffect, watch,
} from 'vue';
import Textarea from 'primevue/textarea';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Card from 'primevue/card';
import Button from 'primevue/button';

// eslint-disable-next-line import/extensions
import { setup } from '../../domain/udoncard/setup';

export default defineComponent({
  name: 'Udoncard',
  components: {
    Textarea, Accordion, AccordionTab, Button,
  },
  setup: () => setup(),
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
.sa-edit-item{
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #222;
}
</style>
