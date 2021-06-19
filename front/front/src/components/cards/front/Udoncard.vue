<template>
  <div class="p-d-flex">
    <div>
      <div :id="containerId" />
    </div>
    <div style="margin-left: 10px;">
      <Accordion :active-index="1">
        <AccordionTab header="全体設定">
          <div class="sa-edit-item">
            <label style="display:block">
              width:
              <InputText
                v-model.number="store.state.data.attrs.width"
                type="number"
              />

            </label>
            <label style="display:block">
              height:
              <InputText
                v-model.number="store.state.data.attrs.height"
                type="number"
              />
            </label>
            <p>背景画像</p>
            <p>※画像は保存されません</p>
            <FileUpload
              :file-limit="1"
              name="bg[]"
              accept="image/*"
              choose-label="画像選択"
              :show-cancel-button="false"
              :show-upload-button="false"
              @select="(event)=>store.bgImageUploader(event)"
            >
              <template #empty>
                <p>画像ファイルをドラッグアンドドロップしてください.</p>
              </template>
            </FileUpload>
            <label style="display:block">
              拡大:
              <InputText
                :model-value="store.state
                  .data
                  .children[store.const.layerIndex]
                  .children[store.const.bgImageGroupIndex]
                  .children[0].attrs.scaleX"
                type="number"
                step="0.1"
                @input="(event)=>store.setBgImageScale(event)"
              />
            </label>
          </div>
        </AccordionTab>
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
                  文字位置:
                  <InputText
                    v-model.number="item.attrs.align"
                    type="text"
                  />
                  (left/center/right)
                </label>
                <label style="display:block">
                  幅:
                  <InputText
                    v-model.number="item.attrs.width"
                    type="number"
                  />
                </label>
                <label>フォント:
                  <Dropdown v-model="item.attrs.fontFamily" :options="store.const.fontFamilies" option-label="label" option-value="value" />
                </label>
                <label>style:
                  <Dropdown v-model="item.attrs.fontStyle" :options="store.const.fontStyles" option-label="label" option-value="value" />
                </label>
              </label>
            </details>
          </div>
          <div class="sa-edit-item-footer">
            <Button label="追加" icon="pi pi-plus" icon-pos="right" @click="()=>store.addNewText()" />
            <Button label="削除" icon="pi pi-minus" icon-pos="right" style="margin-left: 2rem;" class=" p-button-danger" @click="()=>store.deleteText()" />
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
                背景色:
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
          <div class="sa-edit-item-footer">
            <Button label="追加" icon="pi pi-plus" icon-pos="right" @click="()=>store.addNewFrame()" />
            <Button label="削除" icon="pi pi-minus" icon-pos="right" style="margin-left: 2rem;" class=" p-button-danger" @click="()=>store.deleteFrame()" />
          </div>
        </AccordionTab>
        <AccordionTab header="線">
          <div v-for="item in store.state.data.children[store.const.layerIndex].children[store.const.lineGroupIndex].children" :key="item" class="sa-edit-item">
            <label style="display:block">
              長さ:
              <InputText
                v-model.number="item.attrs.points[2]"
                type="number"
                min="0"
              />
            </label>
            <label style="display:block">
              回転:
              <InputText
                v-model.number="item.attrs.rotation"
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
            </details>
          </div>
          <div class="sa-edit-item-footer">
            <Button label="追加" icon="pi pi-plus" icon-pos="right" @click="()=>store.addNewFrame()" />
            <Button label="削除" icon="pi pi-minus" icon-pos="right" style="margin-left: 2rem;" class=" p-button-danger" @click="()=>store.deleteFrame()" />
          </div>
        </AccordionTab>
        <AccordionTab header="画像">
          <p>※画像は保存されません</p>
          <div v-for="item in store.state.data.children[store.const.layerIndex].children[store.const.imageGroupIndex].children" :key="item" class="sa-edit-item">
            <FileUpload
              :file-limit="1"
              name="image[]"
              accept="image/*"
              choose-label="画像選択"
              :show-cancel-button="false"
              :show-upload-button="false"
              @select="(event)=>store.imageUploader(event, item)"
            >
              <template #empty>
                <p>画像ファイルをドラッグアンドドロップしてください.</p>
              </template>
            </FileUpload>
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
                拡大:
                <InputText
                  :model-value="item.attrs.scaleX"
                  type="number"
                  step="0.1"
                  @input="(event)=>store.setImageScale(event, item)"
                />
              </label>
            </details>
          </div>
          <div class="sa-edit-item-footer">
            <Button label="追加" icon="pi pi-plus" icon-pos="right" @click="()=>store.addNewImage()" />
            <Button label="削除" icon="pi pi-minus" icon-pos="right" style="margin-left: 2rem;" class=" p-button-danger" @click="()=>store.deleteImage()" />
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import {
  defineComponent, onMounted, watch,
} from 'vue';
import Textarea from 'primevue/textarea';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

import Button from 'primevue/button';
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';
import { cloneDeep } from 'lodash';
import { ContainerConfig } from 'konva/lib/Container';
import { createStore } from '@/domain/cards/store';
import { draw } from '@/domain/cards/draw';

export default defineComponent({
  name: 'Udoncard',
  components: {
    Textarea, Accordion, AccordionTab, Button, FileUpload, Dropdown,
  },
  setup: () => {
    const containerId = 'template-card-front';
    const store = createStore(containerId);

    const updateData = (d: ContainerConfig) => {
      store.state.data = d;
    };

    // watchEffectだと #konva-container が描画される前に動いてしまう
    // watchにオブジェクトの変化を認識させるために、cloneDeepが必要
    watch(() => cloneDeep(store.state), (s) => {
      draw(containerId, s.data, updateData);
    });

    onMounted(() => {
      draw(containerId, store.state.data, updateData);
    });
    return {
      store,
      containerId,
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
.sa-edit-item{
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #222;
}
.sa-edit-item-footer{
  margin: 10px;
  text-align: left;
}
</style>
