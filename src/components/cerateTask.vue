<template>
<div>
<i class="bi bi-pencil-fill app-btn-light" style="font-size:25px;" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create New Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body app-flex-column">
        <span class="app-text-size-y my-1">Task Name</span>
        <input type="text" class="form-control my-1" v-model="title">
        <span class="app-text-size-y app-red-color my-1" v-if="titleError">The Name cannot be empty...!</span>
        <div><button class="app-btn-blue my-1" @click="createTask">Create</button></div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import {uid} from '../uid'
import {history} from '../history'
export default {
    data(){
      return{
        title : '' , 
        titleError : false , 
      }
    } , 
    methods : {
      createTask(){
        if(this.title === ''){
           this.titleError = true 
        }  
        else{
          this.titleError = false 
          this.$store.dispatch('tasksCS/createTask' , {id : uid() , createTime : history() , title : this.title })
          this.title = '' 
        }
      }
    }
}
</script>

<style>

</style>