<script setup lang="ts">
import ListShadows from './components/ListShadows.vue'

const pack = {
  title: 'vue-box-shadows',
  desc: 'Collection of CSS box-shadows for every taste contains more than 100 simple, beautiful and airy shadows.',
};
</script>

<template lang="pug">
.container
  img( alt="logo" class="logo" src="./logo.svg" width="125" height="125")
  h1.message {{ pack.title }}
    strong
      | 
      | for 
      span Vue 3

  p {{ pack.desc }}

  ListShadows
</template>

<style lang="scss">
:root {
  --base-size: 0.25rem;
  --body-text-color: #1f2229;
  --body-background: #eceef7;
  --card-border-color: #abc6d034;
  --card-background: #eceef7;
  --vue-color: #42d392;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
  font-size: clamp(1rem, 1.5vw, 2.25rem);
  color: var(--body-text-color);
  background-color: var(--body-background);

  .container {
    max-width: 86vw;
    margin: 3rem auto;
    padding: calc(var(--base-size) * 6);
    text-align: center;

    .message {
      margin-bottom: 1rem;

      span {
        color: var(--vue-color);
      }
    }
  }
}
</style>