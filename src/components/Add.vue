<template>
    <HeaderPage />
    <h1>Hello User, Welcome to the Add Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter name" v-model="restaurant.name" />
        <input type="text" name="address" placeholder="Enter address" v-model="restaurant.address" />
        <input type="text" name="contact" placeholder="Enter contact number" v-model="restaurant.contact" />
        <button type="button" class="addButton" v-on:click="addRest">Add new restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
import axios from 'axios'
export default {
    name: 'Add',
    components: {
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
    methods: {
        async addRest() {

            const result = await axios.post("http://localhost:3000/restaurant", {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            if(result.status==201){
                this.$router.push({name:"HomePage"});
            }
        }
    },
    mounted() {

        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'SignIn' });
        }
    }
}

</script>