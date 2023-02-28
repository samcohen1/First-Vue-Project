<template>
    <HeaderPage/>
    <h1>Hello User, Welcome to the Update Restaurant Page</h1>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
export default {
    name: 'Update',
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