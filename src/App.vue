<template>
  <div class="xl:flex xl:h-screen xl:items-center xl:justify-center w-full">
    <ul class="
      xl-layout xl:space-y-0
      px-[32px] py-[26px] space-y-10">
      <template v-for="(data, index) of card_data" :key="index">
        <Card :data="data" />
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from './components/Card.vue'
import { CARD_DATA } from './components/card-data'

export default defineComponent({
  name: 'App',
  components: {
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