<template>
  {{msg}}
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "CardSlogan",
  setup() {
    const msg = ref('slogannnnnn');
    return { msg };
  },
});
</script>