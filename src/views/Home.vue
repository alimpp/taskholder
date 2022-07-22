<template>
  <div class="home">
     <taskComponent/>
  </div>
</template>

<script>
import taskComponent from '../components/tasksComponent.vue'
export default {
  name: 'Home',
  components : {taskComponent}
}
</script>
