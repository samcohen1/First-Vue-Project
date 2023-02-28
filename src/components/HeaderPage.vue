<template>
    <div class="nav">

        <router-link to="/">Home</router-link>
        <router-link to="/Add">Add Restaurant</router-link>
        <a href="#" v-on:click="logout">Logout</a>
    </div>
</template>

<script>

export default {
    name: 'HeaderPage',
    methods:{
        logout(){
            localStorage.removeItem('user-info');
            this.$router.push({name:'LoginPage'});
        },
        
    }
}
</script>

<style>
.nav {
    background-color: darkslategray; 
    overflow: hidden;
}

.nav a{
    float: left;
    color:white;
    padding: 14px;
    text-decoration: none;
    margin-right:5px;
}

.nav a:hover{
    background-color: white;
    color:darkslategray;
}
</style>