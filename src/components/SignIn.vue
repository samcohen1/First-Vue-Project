<template>
    <img id="logo" src="../assets/restLogo.jpeg">
    <h1>Sign In</h1>
    <div id="entries">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        
    </div>
    <button id="enter" v-on:click="enter">Sign In</button>
    <p>
        <router-link to="/login">Login</router-link>
    </p>
</template>

<script>
import axios from 'axios'
export default {
    name: "SignIn",
    data(){
        return{
            name:'',
            email:'',
            password:'',
        }
    },
    methods:{
        async enter(){
            let result =await axios.post("http://localhost:3000/users",
            {email:this.email,
            password:this.password,
            name:this.name});

            console.log(result);
            if(result.status==201){
                
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name:'HomePage'});
            }
        },
    },
    mounted(){
       
        let user=localStorage.getItem("user-info");
        if(user){
            this.$router.push({name:'HomePage'});
        }
    }
}
</script>

<style>
    
</style>