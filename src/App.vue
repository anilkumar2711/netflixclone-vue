<template>
  <div id="app">
    <ChildComponent1 :options="['Option 1','Option 2','fuck']"/>
    <ChildComponent1 :options="['Option 1','somebad','Option 3']"/>
  </div>
</template>

<script>
import ChildComponent1 from './components/ChildComponent1.vue'

export default {
  name: 'App',
  components: {
    ChildComponent1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
