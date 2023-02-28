<template>
    <HeaderPage/>
    <h1>Hello User, Welcome to the Update Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter contact number" v-model="restaurant.contact" />
        <button type="button" class="addButton" v-on:click="update">Update restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'
export default {
    name: 'Update',
    components:{
        HeaderPage
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: '',
            }

        }
    },
    methods:{
        async update(){
            const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if(result.status==200){
                this.$router.push({name:"HomePage"});
            }
        }
    },
    async mounted() {
        
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'SignIn' });
        }
        const result = await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id);
        this.restaurant=result.data;
    }
}

</script>