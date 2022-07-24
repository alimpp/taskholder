<template>
  <div class="emergency container scrollbar">
    <div class="col-lg-12 app-flex-row">
       <img class="logo mx-2" src="https://i.graphicmama.com/uploads/2019/3/5c81d12ca5c93-Tasks%20Management%20Logo%20Design.jpg" alt="Error">
       <createTask/>
          
       <i class="bi bi-search px-2 py-1" style="font-size:25px;" type="button"  data-bs-toggle="modal" data-bs-target="#searchTask"></i>

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
   <table class="table opa-anim">
  <thead>
    <tr>
      <th scope="col">Task Name</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody v-for="data in dataSource" :key="data.id">
    <tr>
      <td>{{data.title}}</td>
      <td>Completed</td>
    </tr>
  </tbody>
</table>
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