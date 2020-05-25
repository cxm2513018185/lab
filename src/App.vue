<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  margin: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
