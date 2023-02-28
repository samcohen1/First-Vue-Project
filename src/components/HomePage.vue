<template>
    <HeaderPage />
    <h1>Hello {{ name }}, Welcome to the Home Page</h1>
    <table border="5">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Contact</td>
            <td>Address</td>
            <td>Actions</td>
        </tr>
        <tr v-for="item in restaurant" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td><router-link :to="'/Update/'+item.id">Update</router-link></td>
        </tr>
    </table>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'
export default {
    name: 'HomePage',
    data(){
        return {
            name:'',
            restaurant:[],
        }
    },
    components:{
        HeaderPage
    },
    async mounted() {
        
        let user = localStorage.getItem("user-info");
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({ name: 'SignIn' });
        }
        let result = await axios.get('http://localhost:3000/restaurant');
        this.restaurant=result.data;
        const res = await fetch("https://icanhazdadjoke.com/", {
            headers:{ accept: "application/json"},
        });
        const data = await res.json();
        console.log(data);
        
    }
}

</script>

<style>
    td{
        width:160px;
        height:40px;
    }
</style>