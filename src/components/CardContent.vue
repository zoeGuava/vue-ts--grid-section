<template>
  <p>{{content}}</p>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "CardContent",
  props: ['data'],
  setup(props) {
    const content = props.data;
    return { content };
  },
});
</script>