<template>
  <div class="nextweek container scrollbar">
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
    <div class="app-flex-wrap app-flex-justify-content-center" style="width:100%;">
       <div class="app-cart app-blue-bg opa-anim app-flex-column mx-2 my-2 pointer" v-for="data in dataSource" :key="data.id">
          <span class="app-text-size-x app-light-color py-1 px-2">Task Name</span>
          <span class="app-text-size-y  app-light-blue-bg py-1 px-2" style="border-radius:5px;">{{data.title}}</span>
          <span class="app-text-size-x app-light-color py-1 px-2">Task Description</span>
          <span class="app-text-size-y app-light-blue-bg py-1 px-2" style="border-radius:5px;">{{data.description}}</span>
          <hr>
          <div class="d-flex">
            <button class="app-btn-red" @click="deleteTask(data.id)"><i class="bi bi-trash3"></i> Remove</button>
            <div class="dropdown">
              <button class="mx-2 app-btn-blue dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
               <i class="bi bi-box-arrow-in-right"></i> Add
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" @click="addToEmergency(data , data.id)">Emergency</a></li>
                <li><a class="dropdown-item" @click="addToNextMount(data , data.id)">Next Mount</a></li>
              </ul>
              <button class="app-btn-dark" @click="addToCompleted(data , data.id)"><i class="bi bi-hand-thumbs-up-fill"></i> Done</button>
            </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
import createTask from '../components/cerateTask.vue'
import Swal from 'sweetalert2'
export default {

   data(){
    return{
      search : '' ,
    }
   } ,

   components : {createTask} , 

   computed : {
     dataSource(){
      const tasks = this.$store.getters['nextWeekCS/getData']
      return tasks.filter(task => {
        return task.title.match(this.search)
      })
     }
   } , 

   methods : {
    deleteTask(id){
       this.$store.dispatch('nextWeekCS/delete' , id)
          Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Next Week Task Deleted',
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
    }
   }

}
</script>

<style scoped >
.nextweek{height: 90vh; overflow: scroll;}
</style>