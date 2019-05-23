<template id="app">
  <ant-layout>
    <Navigation />
    <router-view/>
  </ant-layout>
</template>
<script>
import Navigation from './components/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>
<style>
body {
  background-color: rgb(239, 239, 239);
}
</style>
