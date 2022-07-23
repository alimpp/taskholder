import Swal from 'sweetalert2'
function updateLocalStorage(nextWeek){
    localStorage.setItem('nextWeek' , JSON.stringify(nextWeek))
}
const nextWeekCS = {
    namespaced : true , 
    state: {
        nextWeek :  localStorage.getItem('nextWeek') ? JSON.parse(localStorage.getItem('nextWeek')) : [] 
    },
    getters : {
        getData(state){
            return state.nextWeek
        } , 
        nextWeekCount(state){
            return state.nextWeek.length
        }
    } ,
    mutations: {
        newNextWeek(state , data){
             state.nextWeek.push(data)
             updateLocalStorage(state.nextWeek)
        } , 
        deleteNextWeekTask(state , id){
            state.nextWeek = state.nextWeek.filter(task => task.id != id)
            updateLocalStorage(state.nextWeek)
        }
    },
    actions: {
        addToNextWeek({commit} , data){
            commit('newNextWeek' , data)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Task Add To Next Week',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 2000
            })
        } ,
        delete({commit} , id){
            commit('deleteNextWeekTask' , id)
        }
    },
}

export default nextWeekCS