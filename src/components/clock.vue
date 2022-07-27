<template>
  <div class="app-dark-bg my-1 mx-3" style="border-radius:5px; height:39px;">
          <h4 class="app-light-color px-3 mt-2">{{showClock}}</h4>
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