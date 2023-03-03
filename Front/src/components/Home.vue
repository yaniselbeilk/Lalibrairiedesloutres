<style>
  div.oneBook{
    display: inline-block;
    margin:10px 20px;
    padding: 5px 10px;
    border: 1px solid white;
  }
</style>

<template>
  <p>I'm Here !</p>
  <router-link to="/from">Link</router-link>
  <div>
    <div v-for="data in donnee" class="oneBook">
      <p><i>id :</i> {{ data.id }}</p>
      <p><i>nom :</i> {{ data.nom }}</p>
      <p><i>description :</i> {{ data.description }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Home',
  data() {
    return {
      donnee: null
    }
  },
  methods: {
    change() {
      axios.get('http://127.0.0.1:8080/api/book/getAll', {
      }).then(response => (
        // console.log(response),
        this.donnee = response.data
      ))
    }
  },
  created: function () {
    this.change();
  }
}
</script>