# Vue3 Box-shadows

A collection of simple and airy shadows for Vue.js v3 projects.

---
[![discord][discord-img]][discord]
[![npm][npm-img]][npm]
[![download][download-img]][download]
[![GitHub issues][issues-img]][issues]

[![GitHub watchers](https://img.shields.io/github/watchers/andrejsharapov/vue3-box-shadows?style=social)][watchers]
[![GitHub forks](https://img.shields.io/github/forks/andrejsharapov/vue3-box-shadows.svg?style=social&)][forks]
[![GitHub stars](https://img.shields.io/github/stars/andrejsharapov/vue3-box-shadows.svg?style=social)][stars]

<p align="right">
<img alt="vue-box-shadows" width="64" height="64" src="https://raw.githubusercontent.com/andrejsharapov/vue3-box-shadows/v1.1.0/logo.svg">
</p>

> **Note**  
> You are reading the documentation for vue-box-shadows on Vue.js v3.  
> Documentation for vue-box-shadows for Vue.js v2 is [here](https://github.com/andrejsharapov/vue-box-shadows).

## Download and Installation

```bash
$ npm i --save-dev vue3-box-shadows
# or yarn
$ yarn add --dev vue3-box-shadows
```

## Usage

```ts
import { createApp } from "vue"
import App from "./App.vue"
import shadows from "vue3-box-shadows";

const app = createApp(App);

app.use(shadows);
app.mount('#app');
```

To create a basic shadow element with minimal configuration, write the following:

```html
<template>
  <div v-box-shadow>
    Add beautiful shadow effects to your project without thinking about CSS.
    Properties are supported by all modern browsers.
  </div>
</template>
```

To use collection shadows, you need to apply `id` or short `name-$` ($ is value) from the [groups](#groups) table.

```html
<template>
  <!-- use name -->
  <div v-box-shadow:neu-2></div>

  <!-- or -->

  <!--  use id -->
  <div v-box-shadow="34"></div>
</template>
```

## Groups

Examples of shadows can be seen in the table below. To work with shadows on your site, simply select a group that matches your site's style (elevation to example), select an ids or names, and you're done.

| Group               |   Id    | Names                              | Values |    Examples    |
| ------------------- | :-----: | ---------------------------------- | :----: | :------------: |
| None                |    0    | `none`                             |   1    |      ---       |
| Elevation           |  1-24   | `el-$`                             |  1-24  | [View][ex-el]  |
| Borders             |  25-30  | `bd-$`                             |  1-6   | [View][ex-bd]  |
| Neumorphism         |  31-39  | `neu-$` or `neu-$-i` or `neu-$-io` |  1-3   | [View][ex-neu] |
| Axis x              |  40-45  | `ax-$`                             |  1-6   | [View][ex-ax]  |
| Axis y              |  46-51  | `ay-$`                             |  1-6   | [View][ex-ay]  |
| Small inner side    |  52-55  | `si-$`                             |  1-4   | [View][ex-si]  |
| Medium inner side   |  56-59  | `mi-$`                             |  1-4   | [View][ex-mi]  |
| Large inner side    |  60-63  | `li-$`                             |  1-4   | [View][ex-li]  |
| Top                 |  64-69  | `t-$`                              |  1-6   |  [View][ex-t]  |
| Bottom              |  70-75  | `b-$`                              |  1-6   |  [View][ex-b]  |
| Right side          |  76-81  | `r-$`                              |  1-6   |  [View][ex-r]  |
| Left side           |  82-87  | `l-$`                              |  1-6   |  [View][ex-l]  |
| Angle: top left     |  88-93  | `tl-$`                             |  1-6   | [View][ex-tl]  |
| Angle: top right    |  94-99  | `tr-$`                             |  1-6   | [View][ex-tr]  |
| Angle: bottom right | 100-105 | `br-$`                             |  1-6   | [View][ex-br]  |
| Angle: bottom left  | 106-111 | `bl-$`                             |  1-6   | [View][ex-bl]  |
| Patterns            | 112-115 | `p-$`                              |  1-2   |      ---       |

## Options

| Option           | Type    | Default                          | Description                                                          |
| ---------------- | ------- | -------------------------------- | -------------------------------------------------------------------- |
| useClass         | Boolean | false                            | Set to `true` in order to import styles into `<head>` automatically. |
| shadowBaseCustom | String  | "0 2px 8px 0 rgb(50 50 50 / 8%)" | Set a value for [`box-shadow`][docs] to change the default property. |

```js
// ...
app.use(shadows, {
  useClass: false,
  shadowBaseCustom: "0 2px 8px 0 rgb(50 50 50 / 8%)",
});

```

## License

Vue-box-shadows is licensed under the MIT license. You are free to use, modify and distribute this software, as long as the copyright header is left intact.

---

[Installing](#download-and-installation) · [Usage](#usage) · [Groups](#groups) · [Options](#options)

<p align="right">
<a href="#vue3-box-shadows">Return to top</a>
</p>

<!--  -->

[discord]: https://discord.gg/XtT4Hdf3
[discord-img]: https://img.shields.io/badge/discord-channel-5865f2.svg
[npm]: https://www.npmjs.com/package/vue3-box-shadows
[npm-img]: https://img.shields.io/npm/v/vue3-box-shadows?color=c53635
[download]: https://www.npmjs.com/package/vue3-box-shadows
[download-img]: https://img.shields.io/npm/dm/vue3-box-shadows.svg

<!--  -->

[issues]: https://github.com/andrejsharapov/vue3-box-shadows/issues/
[issues-img]: https://img.shields.io/github/issues/andrejsharapov/vue3-box-shadows.svg

<!-- GitHub buttons -->

[watchers]: https://github.com/andrejsharapov/vue3-box-shadows/watchers/
[forks]: https://github.com/andrejsharapov/vue3-box-shadows/network/
[stars]: https://github.com/andrejsharapov/vue3-box-shadows/stargazers/

<!--Examples  -->

[ex-el]: https://codesandbox.io/s/v-b-s-1-0-4-elevation-w22j9h?file=/src/App.vue
[ex-bd]: https://codesandbox.io/s/v-b-s-1-0-4-bd-merco1?file=/src/App.vue
[ex-neu]: https://codesandbox.io/s/v-b-s-1-0-4-neumorphism-0pnb12?file=/src/App.vu
[ex-ax]: https://codesandbox.io/s/v-b-s-1-0-4-axis-x-msdqlx?file=/src/App.vue
[ex-ay]: https://codesandbox.io/s/v-b-s-1-0-4-axis-y-nzd9gm?file=/src/App.vue
[ex-si]: https://codesandbox.io/s/v-b-s-1-0-4-si-rppl4t?file=/src/App.vue
[ex-mi]: https://codesandbox.io/s/v-b-s-1-0-4-mi-pcisfe?file=/src/App.vue
[ex-li]: https://codesandbox.io/s/v-b-s-1-0-4-li-yu3hf1?file=/src/App.vue
[ex-t]: https://codesandbox.io/s/v-b-s-1-0-4-top-wezz49?file=/src/App.vue
[ex-b]: https://codesandbox.io/s/v-b-s-1-0-4-bottom-t7fjxr?file=/src/App.vue
[ex-r]: https://codesandbox.io/s/v-b-s-1-0-4-right-vjc7f1?file=/src/App.vue
[ex-l]: https://codesandbox.io/s/v-b-s-1-0-4-left-jz580s?file=/src/App.vue
[ex-tl]: https://codesandbox.io/s/v-b-s-1-0-4-tl-ir0icl?file=/src/App.vue
[ex-tr]: https://codesandbox.io/s/v-b-s-1-0-4-tr-mvskqv?file=/src/App.vue
[ex-br]: https://codesandbox.io/s/v-b-s-1-0-4-br-ktwumh?file=/src/App.vue
[ex-bl]: https://codesandbox.io/s/v-b-s-1-0-4-bl-g231ml?file=/src/App.vue
