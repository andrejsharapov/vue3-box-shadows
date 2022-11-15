<script>
export default {
  setup() {
    const pkg = require('../package.json');

    const pack = {
      v: pkg.version,
      desc: pkg.description,
    }

    return { pack }
  },
}
</script>

<template lang="pug">
.container
  img(
    src="../logo.svg",
    alt="logo",
    width="125",
    height="125"
  )
  h1.message Vue-box-shadows@{{pack.v}}
    strong
      | 
      | for 
      span Vue 3

  p {{ pack.desc }}

  .list
    .item(
      v-for="item in 115",
      :key="item",
      v-box-shadow="item",
    ) {{ item }}
</template>

<style>
:root {
  --base-size: 0.25rem;
  --body-text-color: #1f2229;
  --body-background: #eceef7;
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
}

.container {
  max-width: 86vw;
  margin: 3rem auto;
  padding: calc(var(--base-size) * 6);
  text-align: center;
}

.message {
  margin-bottom: 1rem;
}

.message span {
  color: var(--vue-color);
}

.list {
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-gap: 3rem;
}

.item {
  padding: 4rem 2rem;
}
</style>