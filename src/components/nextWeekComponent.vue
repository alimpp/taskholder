<template>
  <div class="nextweek container scrollbar">
    <div class="col-lg-12 app-flex-row">
      
       <createTask/>
          
     <i class="bi bi-search app-btn-light mx-2" style="font-size:25px;" type="button"  data-bs-toggle="modal" data-bs-target="#searchTask"></i>

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
      <button class="app-btn-dark" @click="changeMode">
          <span v-if="tableMode">Cart</span>
          <span v-else>Table</span>
        </button>
    </div>
    <hr>

   <table class="table opa-anim" v-if="tableMode">
      <thead>
        <tr>
          <th scope="col">Task Name</th>
          <th scope="col">Create Time</th>
          <th scope="col">Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody v-for="data in dataSource" :key="data.id">
        <tr>
          <td class="opa-anim">{{data.title}}</td>
          <td class="opa-anim">{{data.createTime}}</td>
          <td class="opa-anim">Next Mount</td>
          <td class="opa-anim">
            <div class="dropdown">
              <i class="bi bi-three-dots-vertical px-2 app-btn-light mx-1"  style="font-size:17px;" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i> 
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item pointer" @click="addToEmergency(data , data.id)">Emergency</a></li>
                <li><a class="dropdown-item pointer" @click="addToNextMount(data , data.id)">Next Mount</a></li>
                <li @click="deleteTask(data.id)"><a class="dropdown-item pointer"><i class="bi bi-trash3 pointer mt-1" style="font-size:20px;" @click="deleteTask(data.id)"></i>Delete</a></li>
                <li @click="addToCompleted(data , data.id)"><a class="dropdown-item pointer"><i class="bi bi-hand-thumbs-up-fill pt-1 pointer" style="font-size:20px;"></i>Completed</a></li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="app-flex-wrap app-flex-justify-content-center" style="width:100%;" v-else>
       <div class="card mx-2 my-2 opa-anim" style="width: 18rem;" v-for="data in dataSource" :key="data.id">
          <div class="card-body app-cart pointer">
            <h5 class="card-title">{{data.title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Next Week Task</h6>
            <h6 class="card-subtitle mb-2 text-muted">{{data.createTime}}</h6>
            <p class="card-text">{{data.description}}</p>
            <div class="d-flex">
              <i class="bi bi-trash3 pointer mt-1" style="font-size:20px;" @click="deleteTask(data.id)"></i>
              <div class="dropdown">
                <i class="dropdown-toggle px-2 app-btn-light mx-1"  style="font-size:17px;" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Add To</i> 
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item pointer" @click="addToEmergency(data , data.id)">Emergency</a></li>
                  <li><a class="dropdown-item pointer" @click="addToNextMount(data , data.id)">Next Mount</a></li>
                </ul>
                <i class="bi bi-hand-thumbs-up-fill px-1 pointer" style="font-size:20px;" @click="addToCompleted(data , data.id)"></i>
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
      tableMode : true ,
    }
   } ,

   components : {createTask , clock} , 

   computed : {
     dataSource(){
      const tasks = this.$store.getters['nextWeekCS/getData']
      return tasks.filter(task => {
        return task.title.match(this.search)
      })
     } , 
    time(){
      return this.$store.getters['time/time']
     } ,
   } , 

   methods : {
    deleteTask(id){
       this.$store.dispatch('nextWeekCS/delete' , id)
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
      this.$store.dispatch('nextWeekCS/delete' , id)
    } , 
    addToNextMount(data , id){
      this.$store.dispatch('nextMountCS/addToNextMount' , data)
      this.$store.dispatch('nextWeekCS/delete' , id)
    } , 
    addToCompleted(data , id){
      this.$store.dispatch('completedCS/addToCompleted' , data)
      this.$store.dispatch('nextWeekCS/delete' , id)
    } , 
    changeMode(){
      this.tableMode = !this.tableMode
    }
   }

}
</script>

<style scoped >
.nextweek{height: 90vh; overflow: scroll;}
</style>