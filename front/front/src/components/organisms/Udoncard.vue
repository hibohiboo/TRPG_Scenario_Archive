<template>
  <div class="p-grid p-jc-center">
    <div class="p-col-4">
      <div id="konva-container" />
    </div>
    <div class="p-col-4">
      <Textarea v-model="store.data.children[0].children[1].attrs.text" :auto-resize="true" />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
import {
  ref, defineComponent, onMounted, watchEffect, watch,
} from 'vue';
import Textarea from 'primevue/textarea';
// eslint-disable-next-line import/extensions
import { setup } from '../../domain/udoncard/setup';

export default defineComponent({
  name: 'Udoncard',
  components: { Textarea },
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
