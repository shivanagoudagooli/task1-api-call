import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj :null,
    options:null
  },
  getters:{
    getCredencials:(state) => {
      return state.obj;
    }
  },
  // watch:{
  //   getCredencials(obj){
  //     console.log(obj);
  //   }
  // },
  mutations: {
    setCredencials:(state,val) =>{
      state.obj = val;
    }
  },
  // actions: {
  //    options = {
  //     method: "POST",
  //     body: JSON.stringify(obj),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   },
  //   login({commmit}) {
  //   fetch('https://api.cloud.altbalaji.com/accounts/login', options)
  //     .then(res => res.json())
  //     .then(res => {
  //       commmit ('getCredencials',res.data)
  //       this.setCredencials(res);
  //       console.log(res.session_token,"hghhghghjgjhghghjghghgjhghgjgjhghjghghjghjgjhg");
  //     });
  //   }
  
//  }
})
