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

            hours = hours < 10 ? `0${hours}` : hours;
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;

            let time = `${hours} : ${minutes} : ${seconds}`

            return time
        } , 
    } ,
}

export default time