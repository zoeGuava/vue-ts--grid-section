<template>
  <ul class="container px-5 py-14 space-y-10">
    <template v-for="(data, index) of card_data" :key="index">
      <Card :data="data" />
    </template>
  </ul>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Tailwind jit" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue'
import { CARD_DATA } from './components/card-data.js'

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    Card
  },
  setup() {
    interface CARD_TYPES {
      header: {
        name: string,
        status: string,
        img: string,
      },
      slogan: string,
      content: string
    }
    const card_data:CARD_TYPES[] = CARD_DATA;

    return { card_data }
  }
})
</script>