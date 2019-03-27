<template>
  <div id="app">
      <main>
          <img src="./assets/logo.png">
          <router-view/>
      </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;

}
.err {
  color: red;
  font-weight: bold;
}
img {
  height: 200px;
}
h1, p {
  color: #2196F3;
}

</style>
