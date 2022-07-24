<template>
  <div class="emergency container scrollbar">
    <div class="col-lg-12 app-flex-row">
       <img class="logo mx-2" src="https://i.graphicmama.com/uploads/2019/3/5c81d12ca5c93-Tasks%20Management%20Logo%20Design.jpg" alt="Error">
       <createTask/>
          
        <button type="button" class="app-btn-yellow mx-1" data-bs-toggle="modal" data-bs-target="#searchTask">
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
                <input v-model="search" type="text" class="form-control my-1" placeholder="Type Title Task">
            </div>
            </div>
        </div>
        </div>

    </div>
    <hr>
    <div class="app-flex-wrap app-flex-justify-content-center" style="width:100%;">
       <div class="app-cart opa-anim app-flex-column mx-2 my-2 pointer" v-for="data in dataSource" :key="data.id">
          <span class="app-text-size-x py-1 px-2">Task Name</span>
          <span class="app-text-size-y  app-light-blue-bg py-1 px-2" style="border-radius:5px;">{{data.title}}</span>
          <span class="app-text-size-x py-1 px-2">Task Description</span>
          <span class="app-text-size-y app-light-blue-bg py-1 px-2" style="border-radius:5px;">{{data.description}}</span>
       </div>
    </div>
  </div>
</template>

<script>
import createTask from '../components/cerateTask.vue'
export default {

   data(){
    return{
      search : '' ,
    }
   } ,

   components : {createTask} , 

   computed : {
     dataSource(){
      const tasks = this.$store.getters['completedCS/getData']
      return tasks.filter(task => {
        return task.title.match(this.search)
      })
     }
   } , 
}
</script>

<style scoped >
.emergency{height: 90vh; overflow: scroll;}
</style>