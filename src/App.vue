<template>
  <div class="app">
     <sidebar class="sidebar"/>
     <router-view></router-view>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
export default {
   components : {sidebar}
}
</script>

<style>

</style>
