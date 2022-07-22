<template>
  <div class="container">
    <div class="col-lg-12 app-flex-row">
        <span class="app-text-size-c app-blue-color px-2">All Tasks</span>
        <createTask/>
          
        <button type="button" class="app-btn-yellow mx-2" data-bs-toggle="modal" data-bs-target="#searchTask">
        Search Task
        </button>


        <div class="modal fade" id="searchTask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Search Task</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="text" class="form-control my-1" placeholder="Type Title Task">
            </div>
            </div>
        </div>
        </div>

    </div>
    <div class="app-flex-wrap app-flex-justify-content-center" style="width:100%;">
       <div class="app-cart app-blue-bg app-flex-column mx-2 my-2 pointer" v-for="data in dataSource" :key="data.id">
          <span class="app-text-size-x my-1">Title</span>
          <span class="app-text-size-z my-1">{{data.title}}</span>
          <span class="app-text-size-x my-1">Description</span>
          <span class="app-text-size-z my-1">{{data.description}}</span>
       </div>
    </div>
  </div>
</template>

<script>
import createTask from '../components/cerateTask.vue'
export default {
   components : {createTask} , 
   computed : {
     dataSource(){
      return this.$store.getters['tasksCS/getData']
     }
   }
}
</script>

<style>

</style>