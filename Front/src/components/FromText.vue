

<template>
  <input type="text" v-model="pseudo">
  <input type="text" v-model="password">
  <button v-on:click="change()">Submit</button>
  <p>{{ password }}</p>
  <p>{{ pseudo }}</p>
</template>

<script>
import axios from "axios"
export default {
  name: 'FromText',
  data() {
    return {
      pseudo: '',
      password: ''
    }
  },
  methods: {
    change(){
      this.pseudo = "che";
      // axios.post('url', {
      // }).then(function (response) {
      //   console.log(response)
      // });
      this.$router.push({ name: 'Home' });
    }
  }
}
</script>