<template>
    <HeaderPage/>
    <h1>Hello User, Welcome to the Add Restaurant Page</h1>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
export default {
    name: 'Add',
    components:{
        HeaderPage
    },
    mounted() {
        
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: 'SignIn' });
        }
    }
}

</script>