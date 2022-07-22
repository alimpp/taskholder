import Swal from 'sweetalert2'
function updateLocalStorage(tasks){
    localStorage.setItem('tasks' , JSON.stringify(tasks))
}
const tasksCS = {
    namespaced : true , 
    state: {
        tasks : localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [] 
    },
    getters : {
        getData(state){
           return state.tasks
        } , 
        tasksCount(state){
            return state.tasks.length
        }
    } ,
    mutations: {
        newTask(state , newData){
            state.tasks.push(newData)
            updateLocalStorage(state.tasks)
        }
    },
    actions: {
        createTask({commit} , data){
            commit('newTask' , data)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Task Created',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 1000
            })
        }
    },
}

export default tasksCS