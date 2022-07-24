const time = {
    namespaced : true , 
    state : {
        date : new Date()  
    } , 
    getters : {
        time(state){
            let hours = state.date.getHours();
            let minutes = state.date.getMinutes();
            let seconds = state.date.getSeconds();
            return hours + ' : ' + minutes + ' : ' + seconds
        } , 
    } ,
}

export default time