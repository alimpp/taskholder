<template>
  <div>
      <button style="border:none;" class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <i class="bi bi-list" style="font-size:30px;"></i>
    </button>  

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">TASK HOLDER</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="app-flex-column"> 
            <button class="app-btn-light-dark my-1" @click="goToTasks">Tasks {{tasksCount}}</button>
            <button class="app-btn-red my-1" @click="goToEmergency">Emergency {{emergencyCount}}</button>
            <button class="app-btn-blue my-1" @click="goToNextWeek">Next Week {{nextWeekCount}}</button>
            <button class="app-btn-yellow my-1" @click="goToNextMount">Next Mount</button>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    methods : {
        goToTasks(){
            return this.$router.push('/')
        } ,
        goToEmergency(){
            return this.$router.push('/emergency')
        } ,
        goToNextWeek(){
            return this.$router.push('/nextWeek')
        } ,
        goToNextMount(){
            return this.$router.push('/nextMount')
        } ,
    } , 
    computed : {
        tasksCount(){
            return this.$store.getters['tasksCS/tasksCount']
        } , 
        emergencyCount(){
            return this.$store.getters['emergencyCS/emergencyCount']
        } , 
        nextWeekCount(){
            return this.$store.getters['nextWeekCS/nextWeekCount']
        }
    }
}
</script>

<style>

</style>