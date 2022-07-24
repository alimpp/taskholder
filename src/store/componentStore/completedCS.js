import Swal from 'sweetalert2'
function updateLocalStorage(completed){
    localStorage.setItem('completed' , JSON.stringify(completed))
}
const completedCS = {
    namespaced : true , 
    state: {
      completed : localStorage.getItem('completed') ? JSON.parse(localStorage.getItem('completed')) : [] 
    },
    getters : {
        getData(state){
            return state.completed
        } , 
        completedCount(state){
            return state.completed.length
        }
    } ,
    mutations: {
        newCompleted(state , data){
             state.completed.push(data)
             updateLocalStorage(state.completed)
        } , 
    },
    actions: {
        addToCompleted({commit} , data){
            commit('newCompleted' , data)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Task Add To Completed',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 2000
            })
        } , 
    },
}

export default completedCS