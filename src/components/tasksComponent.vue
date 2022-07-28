<template>
  <div class="tasks container scrollbar">
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
    <div class="app-flex-wrap app-flex-justify-content-center" style="width:100%;"> 
       <div class="card mx-2 my-2 opa-anim" style="width: 18rem;" v-for="data in dataSource" :key="data.id">
        <div class="card-body app-cart pointer">
          <h5 class="card-title">{{data.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Expected Tasks</h6>
          <h6 class="card-subtitle mb-2 text-muted">{{data.createTime}}</h6>
          <p class="card-text">{{data.description}}</p>
           <div class="d-flex">
            <i class="bi bi-trash3 px-1 pointer" style="font-size:20px;" @click="deleteTask(data.id)"></i>
            <div class="dropdown">
              <i style="font-size:17px;" class="dropdown-toggle px-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Add To</i> 
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item pointer" @click="addToEmergency(data , data.id)">Emergency</a></li>
                <li><a class="dropdown-item pointer" @click="addToNextWeek(data, data.id)">Next Week</a></li>
                <li><a class="dropdown-item pointer" @click="addToNextMount(data , data.id)">Next Mount</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import createTask from '../components/cerateTask.vue'
import Swal from 'sweetalert2'
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
      const tasks = this.$store.getters['tasksCS/getData']
      return tasks.filter(task => {
        return task.title.match(this.search)
      })
     } , 
   } , 

   methods : {
    deleteTask(id){
      this.$store.dispatch('tasksCS/delete' , id)
      Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Task Deleted',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 2000
      })
    } , 
    addToEmergency(data , id){
       this.$store.dispatch('emergencyCS/addToEmergency' , data)
       this.$store.dispatch('tasksCS/delete' , id)
    } , 
    addToNextWeek(data, id){
       this.$store.dispatch('nextWeekCS/addToNextWeek' , data)
       this.$store.dispatch('tasksCS/delete' , id)
    } , 
    addToNextMount(data , id){
       this.$store.dispatch('nextMountCS/addToNextMount' , data)
       this.$store.dispatch('tasksCS/delete' , id)
    }
   }

}
</script>

<style scoped >
.tasks{height: 90vh; overflow: scroll;}
</style>