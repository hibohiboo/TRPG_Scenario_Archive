<template>
  <div class="p-grid p-jc-center">
    <div class="p-col-4">
      <div id="konva-container" />
    </div>
    <div class="p-col-4">
      <Accordion :active-index="0">
        <AccordionTab header="テキスト">
          <Card v-for="item in store.state.data.children[store.const.layerIndex].children[store.const.textGroupIndex].children" :key="item">
            <template #content>
              <Textarea v-model="item.attrs.text" :auto-resize="true" />
              <label style="display:block">
                x:
                <InputText
                  id="inputtext"
                  v-model.number="item.attrs.x"
                  type="number"
                />
              </label>
              <label style="display:block">
                y:
                <InputText
                  id="inputtext"
                  v-model.number="item.attrs.y"
                  type="number"
                />
              </label>
            </template>
          </Card>
          <div class="p-grid" style="margin: 10px">
            <Button label="追加" icon="pi pi-plus" icon-pos="right" style="display:block" class="p-offset-1 p-col" @click="()=>store.addNewText()" />
            <Button label="削除" icon="pi pi-minus" icon-pos="right" style="display:block" class="p-offset-2 p-col p-button-danger" />
          </div>
        </AccordionTab>
        <AccordionTab header="Header II">
          Content
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
    Textarea, Accordion, AccordionTab, Button, Card,
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

</style>
