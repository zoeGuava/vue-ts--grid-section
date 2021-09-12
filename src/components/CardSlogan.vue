<template>
  <h1 class="text-white leading-tight text-2xl font-semibold	">{{slogan}}</h1>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "CardSlogan",
  props: {
    data: {
      type: String,
    }
  },
  setup(props) {
    const slogan = props.data;
    return { slogan };
  },
});
</script>