<template>
  {{msg}}
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "CardHeader",
  setup() {
    const msg = ref('card header');
    return { msg };
  },
});
</script>