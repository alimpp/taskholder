import Swal from 'sweetalert2'
function updateLocalStorage(nextMount){
    localStorage.setItem('nextMount' , JSON.stringify(nextMount))
}
const nextMountCS = {
    namespaced : true , 
    state: {
        nextMount : localStorage.getItem('nextMount') ? JSON.parse(localStorage.getItem('nextMount')) : []
    },
    getters : {
        getData(state){
            return state.nextMount
        } , 
        nextMountCount(state){
            return state.nextMount.length
        }
    } ,
    mutations: {
        newNextMount(state , data){
            state.nextMount.push(data)
            updateLocalStorage(state.nextMount)
        } , 
        deleteNextMountTask(state , id){
            state.nextMount = state.nextMount.filter(task => task.id != id)
            updateLocalStorage(state.nextMount)
        }
    },
    actions: {
        addToNextMount({commit} , data){
            commit('newNextMount' , data)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Task Add To Next Mount',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 2000
            })
        } , 
        delete({commit} , id){
            commit('deleteNextMountTask' , id)
        }
    },
}

export default nextMountCS