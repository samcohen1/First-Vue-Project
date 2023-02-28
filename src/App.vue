<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body{
  padding:0;
  margin: 0;
}

#logo {
  margin-top: 20px;
  width: 150px;
}

#entries input, .add input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  border: 3px solid skyblue;
  border-radius: 10px;
}

#enter, .addButton{
  width: 300px;
  height: 40px;
  border: 3px solid skyblue;
  background-color: skyblue;
  border-radius: 15px;
  cursor: pointer;
}
</style>
