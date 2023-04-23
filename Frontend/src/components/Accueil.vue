<template>
  <header>
    <div id="bienvenue">
      <h1>Bienvenue dans la librairie des loutres !</h1>
      <form v-on:submit.prevent="getBooks()">
        <input type="text" class="recherche" v-model="search" placeholder="Rechercher une oeuvre">
      </form>
    </div>
  </header>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      search: '',
      books: {}
    }
  },
  methods: {
  getBooks() {
  axios.get('https://www.googleapis.com/books/v1/volumes?q='+this.search)
  .then(response => {
    console.log(response.data);
    this.books = response.data.items;
  })
  .catch(error => {
    console.log(error);
  });
    }
  }
}
</script>
<style>
header {
  font-family: acme;
  font-size: 25px;
  background-image: url(../../ressources/librairie-background.jpeg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100svh;
  width: 100%;
}

#bienvenue {
  top: 90px;
  color: var(--vt-c-black-soft);
  background-color: rgba(199, 213, 255, 0.5);
  height: 300px;
  margin: auto;
  text-align: center;
}

#bienvenue>h1 {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 50px;
}

#bienvenue>form {
  position: relative;
  top: 65%;
  transform: translateY(-20%);
}

#bienvenue>form>input {
  font-size: 30px;
  height: 80px;
  width: 50%;
}
</style>