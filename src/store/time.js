const time = {
    namespaced : true , 
    state : {
        clock : ''
    } , 
    getters : {
        showClock(state){
            return state.clock
        }
     } , 
    mutations : {
        globalClock(state , data){
            return state.clock = data
        }
    } ,
    actions : {
        globalClock({commit} , data){
            const date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            data = `${hours} : ${minutes} : ${seconds}`
            commit('globalClock' , data)
        },
    }
}

export default time