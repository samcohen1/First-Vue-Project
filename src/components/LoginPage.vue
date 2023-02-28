<template>
    <img id="logo" src="../assets/restLogo.jpeg">
    <h1>Login</h1>
    <div id="entries">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">

    </div>
    <button id="enter" v-on:click="enter">Login</button>
    <p>
        <router-link to="/SignIn">Sign Up</router-link>
    </p>
</template>

<script>
import axios from 'axios'
export default {

    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async enter() {
            let result =  await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            if(result.status==200&& result.data.length>0){
                
                localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                this.$router.push({name:'HomePage'});
            }
        }
    },
    mounted(){
        let user=localStorage.getItem("user-info");
        if(user){
            this.$router.push({name:'HomePage'});
        }
    }
}
</script>

