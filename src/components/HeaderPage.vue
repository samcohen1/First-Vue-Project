<template>
    <div class="nav">

        <a href="#" v-on:click="Home">Home</a>
        <a href="#" v-on:click="Add">Add Restaurant</a>
        <a href="#" v-on:click="Update">Update Restaurant</a>
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
        Add(){
            this.$router.push({name:'Add'});
        },
        Update(){
            this.$router.push({name:'Update'});
        },
        Home(){
            this.$router.push({name:'HomePage'});
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