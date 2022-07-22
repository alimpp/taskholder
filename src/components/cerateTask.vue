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
      <div class="modal-body">
        <span class="app-text-size-y my-1">Title</span>
        <input type="text" class="form-control my-1">
        <span class="app-text-size-y my-1">Descrption</span>
        <textarea name="" id="" cols="30" rows="10" class="form-control my-1"></textarea>
        <button class="app-btn-blue my-1">Create</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>