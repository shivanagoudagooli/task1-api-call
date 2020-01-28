<template>
  <div>
    <h1>Login Page</h1>
    <div>
      username:
      <input type="text" v-model="username" style="margin-bottom:25px"/><br>
      password:
      <input type="password" v-model="password" style="margin-bottom:25px"/>
      <router-link to="/Home" v-if="show">next page</router-link><br>
      <input type="submit" v-on:click="submit" value="login" style="margin-left:75px"/>
    </div>
  </div>
</template>
<script>
import { Callapi } from '../components/Api'
export default {
  data() {
    return {
      username: null,
      password: null,
     show:false
    };
  },
  methods: { 
    submit() 
    {
      let apiCall = new Callapi();
      var obj = {}; 
      let username = this.username;
      let password = this.password;
      obj.username = username;
      obj.password = password;
      if(username.length > 15 && password > 15)
      {
          alert("charcters sholud not exceed 15 characters");
      }else if(username === "" && password === "" )
      {
          alert("username and password are shoult not be empty ");
      }else if (username === "" && password ==='pppppppp')
      {
          alert("username sholud not be empty");
      }else if(username === "ppp@ppp.ppp" && password === "")
      {
          alert("password should not be empty");
      }else if(username === 'ppp@ppp.ppp' && password ==='pppppppp')
      {
           apiCall.apiCalling(obj);
          //  .then(Response => {
          //    console.log(Response.account.login,"dsdsddddd");
          //  });
           this.$router.push('Home')
      }else
      {
          alert("please check username or password is wrong");
      }
    },
    // varify(obj) {
    //   const options = {
    //     method: "POST",
    //     body: JSON.stringify(obj),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   };

    //   fetch("https://api.cloud.altbalaji.com/accounts/login", options)
    //   .then(res =>  console.log(res,"loginPage"))
    //     .then(res => res.json())
    //     .then(res => {
    //       // console.log(res,"loginPage");
    //       this.setCredencials(res);
    //     });
    // },
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