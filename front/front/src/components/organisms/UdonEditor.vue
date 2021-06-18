<template>
  <div class="p-fluid sa-ly-width">
    <div class="p-field p-m-4">
      <span class="p-float-label">
        <InputText
          id="inputtext"
          v-model="value"
          type="text"
        />
        <label for="inputtext">シナリオ名</label>
      </span>
    </div>
    <div class="p-field p-m-4">
      <span class="p-float-label">
        <Textarea
          id="textarea"
          v-model="value2"
          :auto-resize="true"
          class="sa-co-width"
        />
        <label for="textarea">シナリオの説明</label>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'Upload',
  components: {
  },
  props: {
  },
  setup: () => {
    const value = ref('');
    const value2 = ref('');

    return {
      value, value2,
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

</style>
