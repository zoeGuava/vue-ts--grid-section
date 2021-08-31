<template>
  <li class="p-8 bg-violet rounded">
    <CardHeader :data="header" />
    <CardSlogan :data="slogan" />
    <CardContent :data="content" />
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardHeader from './CardHeader.vue';
import CardSlogan from './CardSlogan.vue';
import CardContent from './CardContent.vue';

export default defineComponent({
  name: "Card",
  components: {
    CardHeader,
    CardSlogan,
    CardContent
  },
  props: ['data'],
  setup(props) {
    const { header, slogan, content } = props.data;
    return { header, slogan, content };
  },
});
</script>