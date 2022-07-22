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

<style scoped >
.app{background: #efeded; height: 100vh;}
</style>
