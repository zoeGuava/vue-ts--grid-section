<template>
  <Card>
    <template v-slot:header>
      <CardHeader />
    </template>
    <template v-slot:slogan>
      <CardSlogan />
    </template>
    <template v-slot:content>
      <CardContent />
    </template>
  </Card>
  <hr>
  <img class="mx-auto mt-12 mb-8" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Tailwind jit" />
  <img class="mx-auto my-8" alt="powered-by" src="./assets/powered-by-vitawind-bright.png">
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue'
import CardHeader from './components/CardHeader.vue'
import CardSlogan from './components/CardSlogan.vue'
import CardContent from './components/CardContent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Card,
    CardHeader,
    CardSlogan,
    CardContent
  }
})
</script>

<style lang="postcss">
  #app {
    @apply text-center
  }
</style>