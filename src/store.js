import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    item: [],
    status: "All",
  },
  mutations: {

  },
  actions: {
    addTodoToBack({commit,state}, items){
      axios.post(`http://localhost:8002/HelloWorld`,items)
        .then(function(response) {
          state.items.push(items);
          state.listItems = state.items;
          console.log(response.data);
        })
        .catch(function(error) {
          alert("please input repeat number.");
       });
    },
    findTodoListWithBack({commit,state}){
      axios.get(`http://localhost:8002/HelloWorld`)
        .then(function(response) {
          console.log(response.data);
          state.items = response.data;
          state.listItems = response.data;
        })
        .catch(function(error) {
          console.log(error);
       });
    },
    updateTodoWithBack({commit,state},item){
      axios.put(`http://localhost:8002/HelloWorld?key=${item.key}&value=${item.value}`)
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
       });
    },
    deleteTodoWithBack({commit,state},index){
      axios.delete(`http://localhost:8002/HelloWorld/${index}`)
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
       });
    },
  }
})
