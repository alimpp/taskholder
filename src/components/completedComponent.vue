<template>
  <div class="emergency container scrollbar">
    <div class="col-lg-12 app-flex-row">
       <createTask/>
          
       <i class="bi bi-search px-3 py-1" style="font-size:25px;" type="button"  data-bs-toggle="modal" data-bs-target="#searchTask"></i>

        <div class="modal fade" id="searchTask" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Search Task</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input v-model="search" type="text" class="form-control my-1" placeholder="Type Name Task">
            </div>
            </div>
        </div>
        </div>
        <clock/>
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
      <td class="opa-anim">{{data.title}}</td>
      <td class="opa-anim">Completed</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import createTask from '../components/cerateTask.vue'
import clock from './clock.vue'
export default {

   data(){
    return{
      search : '' ,
    }
   } ,

   components : {createTask , clock} , 

   computed : {
     dataSource(){
      const tasks = this.$store.getters['completedCS/getData']
      return tasks.filter(task => {
        return task.title.match(this.search)
      })
     } , 
     time(){
      return this.$store.getters['time/time'] 
     } ,
   } , 
}
</script>

<style scoped >
.emergency{height: 90vh; overflow: scroll;}
</style>