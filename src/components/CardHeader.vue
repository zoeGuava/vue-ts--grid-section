<template>
  <header class="mb-[18px] flex items-center space-x-4">
    <img
      class="w-10 rounded-full"
      :src="require(`${img}`)" :alt="name">
    <div class="flex flex-col justify-center">
      <p class="mb-1 text-white leading-none">{{ name }}</p>
      <p class="text-xs leading-none text-white opacity-50">{{ status }}</p>
    </div>
  </header>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "CardHeader",
  props: ['data'],
  setup(props) {
    const { name, status, img } = props.data;
    return { name, status, img };
  },
});
</script>