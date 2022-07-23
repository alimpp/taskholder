<template>
  <!-- Button trigger modal -->
<button type="button" class="app-btn-light-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Create Task
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create New Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body app-flex-column">
        <span class="app-text-size-y my-1">Title</span>
        <input type="text" class="form-control my-1" v-model="title">
        <span class="app-text-size-y app-red-color my-1" v-if="titleError">The Title cannot be empty...!</span>
        <span class="app-text-size-y my-1">Description</span>
        <textarea name="" id="" cols="30" rows="10" class="form-control my-1" v-model="description"></textarea>
        <span class="app-text-size-y app-red-color my-1" v-if="descriptionError">The Description cannot be empty...!</span>
        <div><button class="app-btn-blue my-1" @click="createTask">Create</button></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {uid} from '../uid'
export default {
    data(){
      return{
        title : '' , 
        titleError : false , 
        description : '' ,
        descriptionError : false , 
      }
    } , 
    methods : {
      createTask(){
        if(this.title === ''){
           this.titleError = true 
        }else{
          this.titleError = false
        }
        if(this.description === ''){
          this.descriptionError = true
        }  
        else{
          this.titleError = false 
          this.descriptionError = false
          this.$store.dispatch('tasksCS/createTask' , {id : uid() , title : this.title , description : this.description })
          this.title = '' 
          this.description = ''
        }
      }
    }
}
</script>

<style>

</style>