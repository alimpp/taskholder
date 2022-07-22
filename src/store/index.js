import { createStore } from 'vuex'
import tasksCS from './componentStore/tasksCS'
import emergencyCS from './componentStore/emergencyCS'
import nextWeekCS from './componentStore/nextWeekCS'
import nextNountCS from './componentStore/nextMountCS'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tasksCS : tasksCS , 
    emergencyCS : emergencyCS , 
    nextWeekCS : nextWeekCS , 
    nextNountCS : nextNountCS ,
  }
})
