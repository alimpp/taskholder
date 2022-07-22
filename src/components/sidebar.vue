<template>

    <button style="border:none;" class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <i class="bi bi-list" style="font-size:30px;"></i>
    </button>  

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Task Cart</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        <div class="app-flex-column"> 
            <button class="app-btn-red my-1">Emergency</button>
            <button class="app-btn-blue my-1">Next Week</button>
            <button class="app-btn-yellow my-1">Next Mount</button>
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