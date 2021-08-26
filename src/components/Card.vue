<template>
  <section>
    <h1>{{msg}}</h1>
    <slot name="header"></slot>
    <slot name="slogan"></slot>
    <slot name="content"></slot>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  setup() {
    const msg = ref('title in card');
    return { msg };
  },
});
</script>