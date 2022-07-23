import Swal from 'sweetalert2'
function updateLocalStorage(emergency){
    localStorage.setItem('emergency' , JSON.stringify(emergency))
}
const emergencyCS = {
    namespaced : true , 
    state: {
        emergency : localStorage.getItem('emergency') ? JSON.parse(localStorage.getItem('emergency')) : [] 
    },
    getters : {
        getData(state){
            return state.emergency
        } , 
        emergencyCount(state){
            return state.emergency.length
        }
    } ,
    mutations: {
        newEmergency(state , data){
             state.emergency.push(data)
             updateLocalStorage(state.emergency)
        } , 
        deleteEmergencyTask(state , id){
            state.emergency = state.emergency.filter(task => task.id != id)
            updateLocalStorage(state.emergency)
        }
    },
    actions: {
        addToEmergency({commit} , data){
            commit('newEmergency' , data)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Task Add To Emergency',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 2000
            })
        } , 
        delete({commit} , id){
            commit('deleteEmergencyTask' , id)
        }
    },
}

export default emergencyCS