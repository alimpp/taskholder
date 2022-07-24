import { createStore } from 'vuex'
import tasksCS from './componentStore/tasksCS'
import emergencyCS from './componentStore/emergencyCS'
import nextWeekCS from './componentStore/nextWeekCS'
import nextMountCS from './componentStore/nextMountCS'
import completedCS from './componentStore/completedCS'
import time from './time'
export default createStore({
  modules: {
    tasksCS : tasksCS , 
    emergencyCS : emergencyCS , 
    nextWeekCS : nextWeekCS , 
    nextMountCS : nextMountCS ,
    completedCS : completedCS , 
    time : time ,
  }
})
