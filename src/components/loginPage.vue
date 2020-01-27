<template>
  <div>
    <h1>Login Page</h1>
    <div>
      username:
      <input type="text" v-model="username" />
      <br />
      <br />
      <br />password:
      <input type="password" v-model="password" />
      <br />
      <br />
      <router-link to="/Home" v-if="show">next page</router-link><br>
      <input type="submit" v-on:click="submit" value="login" />
      
      
      <!-- <h1>@click="checkInputs"</h1> -->
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations} from 'vuex'
export default {
  data() {
    return {
      username: null,
      password: null,
     show:false
    };
  },
  computed:{
      ...mapGetters(['getCredencials'])
  },
  methods: {
    ...mapMutations(['setCredencials']),
    submit() {
      var obj = {}; 
      let username = this.username;
      let password = this.password;
      obj.username = username;
      obj.password = password;
      console.log(obj);
      if(username.length > 15 & password > 15){
          alert("charcters sholud not exceed 15 characters");
      }else if(username === "" & password === "" ){
          alert("username and password are shoult not be empty ");
      }else if (username === "" & password ==='pppppppp'){
          alert("username sholud not be empty");
      }else if(username === "ppp@ppp.ppp" &password === ""){
          alert("password should not be empty");
      }else if(username === 'ppp@ppp.ppp' & password ==='pppppppp'){
           this.varify(obj);
           this.$router.push('Home')
      }else{
          alert("please check username or password is wrong");
      }
      
    },
    varify(obj) {
      const options = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        }
      };

      fetch("https://api.cloud.altbalaji.com/accounts/login", options)
        .then(res => res.json())
        .then(res => {
          this.setCredencials(res);
          console.log(res.session_token,"hghhghghjgjhghghjghghgjhghgjgjhghjghghjghjgjhg");
        });
    }
    // nextPage(){
    //     if(this.username === 'ppp@ppp.ppp' & this.password === 'pppppppp'){
    //         this.isauthenticated = true;
    //         console.log("tset")
    //     }else{
    //         this.isauthenticated = false;
    //         console.log("testw")
    //     }
    // }

  }
};
</script>
<style scoped>
</style>