<template>
  <div class="my-1 mx-3" style="border-radius:5px; height:39px;">
          <h5 class="app-dark-color px-1 mt-2">{{showClock}}</h5>
  </div>
</template>

<script>
export default {
   computed : {
      showClock(){
        return  this.$store.getters['time/showClock']
      }
   } , 
   mounted(){
      setInterval(() => {
        this.$store.dispatch('time/globalClock')
      } ,1000);
   },
}
</script>

<style>

</style>