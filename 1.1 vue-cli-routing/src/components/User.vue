<template>
  <div class="user">
    <h1>{{ msg }}</h1>
    <h4>User {{ $route.params.id }}</h4>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Userrrrrrr Component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
    h4 {
        color: #42b983;
    }
</style>
